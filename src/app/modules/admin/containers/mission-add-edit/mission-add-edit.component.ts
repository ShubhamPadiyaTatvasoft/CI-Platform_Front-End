import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { FormValidationService } from 'src/shared/services/form-validation.service';
import { NotificationService } from 'src/shared/services/notification.service';
import { ErrorMessages } from 'src/app/common/errorMsg.static';

@Component({
  selector: 'app-mission-add-edit',
  templateUrl: './mission-add-edit.component.html',
  styleUrls: ['./mission-add-edit.component.scss'],
})
export class MissionAddEditComponent {
  basicDetailsForMission: FormGroup;
  configurationDetailsForMission: FormGroup;
  missionMedia: FormGroup;
  missionDocument: FormGroup;
  errorMessage = ErrorMessages;
  isLinear = true;
  toggleInputsForGoal: boolean = false;
  countries: [];
  cities: [];
  themes: [];
  skills: [];
  images: string[] = [];
  documents: string[] = [];
  documentsTypeAndName: string[] = [];
  imageTypeName: string[] = [];
  checkedSkills: number[] = [];
  countryId: number;
  currentDate: Date = new Date();
  missionId: number;
  missionType: string = '';
  goalValidators: any[] = [];
  CITY_INITIAL_OPTION: string = 'Please select country first';
  preLoader: string = 'hidden';
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private router: Router,
    private notifyService: NotificationService,
    public formValidationService: FormValidationService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.route.params.subscribe((params) => {
      if (params['id'] != null) {
        this.missionId = +params['id'];
        setTimeout(() => {
          this.getMissionData(+params['id']);
        }, 1000);
      } else {
        this.missionId = 0;
      }
    });
  }

  //create form
  createForm() {
    this.basicDetailsForMission = this.formBuilder.group({
      missionTitle: ['', Validators.required],
      missionShortDescription: ['', Validators.required],
      missionDescription: ['', Validators.required],
      organizationName: ['', Validators.required],
      organizationDetails: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
    });
    this.configurationDetailsForMission = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      deadlineDate: ['', Validators.required],
      availability: ['', Validators.required],
      missionTheme: ['', Validators.required],
      missionSkills: ['', Validators.required],
      missionType: ['', Validators.required],
      totalSeats: [0, Validators.required],
      status: ['1', Validators.required],
      goalText: [''],
      goalValue: [0],
    });
    this.missionMedia = this.formBuilder.group({
      images: [''],
    });
    this.missionDocument = this.formBuilder.group({
      document: [''],
    });
    this.getCountryThemeSkills();
  }

  //get mission's data from missionId api
  getMissionData(id: number) {
    this.preLoader = 'inline-block absolute';
    this.adminService.getMissionData(+id).subscribe({
      next: (res) => {
        this.preLoader = 'hidden';
        for (let i = 0; i < res.data['missionSkills'].length; i++) {
          this.checkedSkills.push(res.data['missionSkills'][i].skillId);
        }
        this.basicDetailsForMission.setValue({
          missionTitle: res.data['mission'].title,
          missionShortDescription: res.data['mission'].shortDescription,
          missionDescription: res.data['mission'].description,
          organizationName: res.data['mission'].organizationName,
          organizationDetails: res.data['mission'].organizationDetail,
          country: res.data['mission'].countryId,
          city: res.data['mission'].cityId,
        });
        this.getCityApi(res.data['mission'].countryId);
        if (res.data['goalMissions'] == null) {
          this.configurationDetailsForMission.setValue({
            startDate: res.data['mission'].startDate,
            endDate: res.data['mission'].endDate,
            availability: res.data['mission'].availability,
            deadlineDate: res.data['mission'].deadline,
            missionTheme: res.data['mission'].themeId,
            missionType: res.data['mission'].missionType,
            missionSkills: this.checkedSkills,
            totalSeats: res.data['mission'].totalSeats,
            goalText: '',
            goalValue: 0,
            status: res.data['mission'].status,
          });
        } else {
          this.configurationDetailsForMission.setValue({
            startDate: res.data['mission'].startDate,
            endDate: res.data['mission'].endDate,
            availability: res.data['mission'].availability,
            deadlineDate: res.data['mission'].deadline,
            missionTheme: res.data['mission'].themeId,
            missionType: res.data['mission'].missionType,
            missionSkills: this.checkedSkills,
            totalSeats: res.data['mission'].totalSeats,
            goalText: res.data['goalMissions'].goalObjectiveText,
            goalValue: res.data['goalMissions'].goalValue,
            status: res.data['mission'].status,
          });
          this.toggleGoalBaseInputs(res.data['mission'].missionType);
        }

        for (let image in res.data['missionMedia']) {
          this.images.push(res.data['missionMedia'][image].mediaPath);
          this.imageTypeName.push(
            res.data['missionMedia'][image].mediaName +
              '.' +
              res.data['missionMedia'][image].mediaType
          );
        }
        for (let document in res.data['missionDocuments']) {
          this.documents.push(
            res.data['missionDocuments'][document].documentPath
          );
          this.documentsTypeAndName.push(
            res.data['missionDocuments'][document].documentName +
              '.' +
              res.data['missionDocuments'][document].documentType
          );
        }
      },
      error: () => {
        this.notifyService.showError(ErrorMessages.ApiErrorMessage.ApiFailed);
      },
    });
  }

  //get all countries's data api
  getCountryThemeSkills() {
    this.adminService.GetAllCountryTheme().subscribe({
      next: (res) => {
        this.countries = res.data['country'];
        this.themes = res.data['themes'];
        this.skills = res.data['skills'];
      },
      error: () => {
        this.notifyService.showError(ErrorMessages.ApiErrorMessage.ApiFailed);
      },
    });
  }

  //get cities based on country
  getCity(event: any) {
    this.countryId = event.value;
    this.cities = [];
    this.getCityApi(this.countryId);
  }

  //api call for get cities based on country
  getCityApi(countryId: number) {
    this.adminService.GetAllCity(countryId).subscribe({
      next: (res) => {
        if (res.data['city'].length == 0) {
          this.CITY_INITIAL_OPTION = 'no cities found';
        } else {
          this.CITY_INITIAL_OPTION = 'Select city';
          this.cities = res.data['city'];
        }
      },
      error: () => {
        this.notifyService.showError(ErrorMessages.ApiErrorMessage.ApiFailed);
        this.CITY_INITIAL_OPTION = 'no cities found';
      },
    });
  }

  //convert image into base64 and add into image array
  onFileChangeForImage(event: any) {
    event.preventDefault();
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        if (
          event.target.files[i].type.match('image/png|image/jpeg|image/jpg')
        ) {
          var reader = new FileReader();
          this.imageTypeName.push(event.target.files[i].name);
          reader.onload = (event: any) => {
            this.images.push(event.target.result);
          };
          reader.readAsDataURL(event.target.files[i]);
        } else {
          this.notifyService.showError('please enter valid image file');
        }
      }
    }
  }

  //convert document into base64 and add into image array
  onFileChangeForDocuments(event: any) {
    event.preventDefault();
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;

      for (let i = 0; i < filesAmount; i++) {
        if (event.target.files[i].type.match('text/plain|application/pdf')) {
          var reader = new FileReader();
          this.documentsTypeAndName.push(event.target.files[i].name);
          reader.onload = (event: any) => {
            this.documents.push(event.target.result);
          };
          reader.readAsDataURL(event.target.files[i]);
        } else {
          this.notifyService.showError('please enter valid document file');
        }
      }
    }
  }

  //toggle input field based on mission type
  toggleGoalBaseInputs(event: string) {
    if (event === 'GOAL') {
      this.toggleInputsForGoal = true;
      this.configurationDetailsForMission
        .get('goalValue')
        ?.setValidators(Validators.required);
      this.configurationDetailsForMission.controls[
        'goalValue'
      ].updateValueAndValidity();
      this.configurationDetailsForMission
        .get('goalText')
        ?.setValidators(Validators.required);
      this.configurationDetailsForMission.controls[
        'goalText'
      ].updateValueAndValidity();
    } else {
      this.toggleInputsForGoal = false;
      this.configurationDetailsForMission.get('goalValue')?.clearValidators();
      this.configurationDetailsForMission.controls[
        'goalValue'
      ].updateValueAndValidity();
      this.configurationDetailsForMission.get('goalText')?.clearValidators();
      this.configurationDetailsForMission.controls[
        'goalText'
      ].updateValueAndValidity();
    }
  }

  //function called for add or update mission
  addUpdateMission() {
    const payload = {
      missionId: this.missionId,
      title: this.basicDetailsForMission.value['missionTitle'],
      shortDescription:
        this.basicDetailsForMission.value['missionShortDescription'],
      description: this.basicDetailsForMission.value['missionDescription'],
      organizationName: this.basicDetailsForMission.value['organizationName'],
      organizationDetails:
        this.basicDetailsForMission.value['organizationDetails'],
      country: this.basicDetailsForMission.value['country'],
      city: this.basicDetailsForMission.value['city'],
      startDate: this.configurationDetailsForMission.value['startDate'],
      endDate: this.configurationDetailsForMission.value['endDate'],
      deadlineDate: this.configurationDetailsForMission.value['deadlineDate'],
      availability: this.configurationDetailsForMission.value['availability'],
      missionTheme: this.configurationDetailsForMission.value['missionTheme'],
      missionSkills: this.configurationDetailsForMission.value['missionSkills'],
      missionType: this.configurationDetailsForMission.value['missionType'],
      totalSeats: +this.configurationDetailsForMission.value['totalSeats'],
      goalText: this.configurationDetailsForMission.value['goalText'],
      goalValue: +this.configurationDetailsForMission.value['goalValue'],
      status: this.configurationDetailsForMission.value['status'],
      missionImages: this.images,
      missionDocuments: this.documents,
      missionDocumentsNameType: this.documentsTypeAndName,
      missionImageNameType: this.imageTypeName,
    };
    this.preLoader = 'inline-block absolute';
    this.adminService.addEditMission(payload).subscribe({
      next: (res) => {
        this.preLoader = 'hidden';
        if (res.statusCode == 200) {
          this.router.navigate(['/AdminPanel/Mission']);
          this.notifyService.showSuccess(res.message);
        }
      },
      error: (err) => {
        this.notifyService.showError(ErrorMessages.ApiErrorMessage.ApiFailed);
      },
    });
  }

  //delete image from array
  deleteImageFromArray(id: number) {
    this.images.splice(id, 1);
    this.imageTypeName.splice(id, 1);
  }

  //delete document from array
  deleteDocumentsFromArray(id: number) {
    this.documents.splice(id, 1);
    this.documentsTypeAndName.splice(id, 1);
  }
}
