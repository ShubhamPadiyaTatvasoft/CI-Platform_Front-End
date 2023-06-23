import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { FormValidationService } from 'src/shared/services/form-validation.service';
import { ErrorMessages } from 'src/app/common/errorMsg.static';
import { ValidatorsPattern } from 'src/app/common/validator.static';
import { NotificationService } from 'src/shared/services/notification.service';

@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.scss'],
})
export class UserAddEditComponent implements OnInit {
  countries: [];
  cities: [];
  userId: number;
  action: string;
  isLinear = false;
  countryId: number;
  isPasswordBlur: boolean = false;
  errorMessage = ErrorMessages;
  selectionHtml: HTMLElement;
  basicDetails: FormGroup;
  personalDetails: FormGroup;
  configurationDetails: FormGroup;
  cityInitialOption: string = 'Please select country first';
  typeOfPassword: string = 'password';
  typeOfConfirmPassword: string = 'password';
  iconName: string = 'visibility_off';
  iconNameForConfirmPassword: string = 'visibility_off';
  EYE_ICON: string = 'visibility_off';
  RED_EYE: string = 'remove_red_eye';
  userStatus: boolean;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    public formValidationService: FormValidationService,
    private router: Router,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getCountry();
    this.route.params.subscribe((params) => {
      if (params['id'] != null) {
        this.userId = +params['id'];
        this.getUserData(+params['id']);
      } else {
        this.action = 'add';
      }
    });
  }

  //create form for edit and add user
  createForm() {
    this.basicDetails = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      password: [
        '',
        [Validators.required, Validators.pattern(ValidatorsPattern.password)],
      ],
    });

    this.personalDetails = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(ValidatorsPattern.email),
        ],
      ],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(ValidatorsPattern.mobileNumber),
        ],
      ],
      country: ['', Validators.required],
      city: ['', Validators.required],
    });

    this.configurationDetails = this.formBuilder.group({
      role: ['', Validators.required],
      status: ['1', Validators.required],
      manager: ['', Validators.required],
    });
  }

  //api call for get all country
  getCountry() {
    this.adminService.GetAllCountryTheme().subscribe({
      next: (res) => {
        this.countries = res.data['country'];
      },
      error: (err) => {
        this.notifyService.showError(ErrorMessages.ApiErrorMessage.ApiFailed);
        this.router.navigate(['']);
      },
    });
  }

  //function for get city
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
          this.cityInitialOption = 'no cities found';
        } else {
          this.cityInitialOption = 'Select city';
          this.cities = res.data['city'];
        }
      },
      error: (err) => {
        this.notifyService.showError(ErrorMessages.ApiErrorMessage.ApiFailed);
      },
    });
  }

  //api call for get particular user data for edit
  getUserData(userId: number) {
    this.adminService.GetUserData(userId).subscribe({
      next: (res) => {
        let encodedPassword: string = atob(res.data['password']);

        this.getCityApi(res.data.countryId);

        this.basicDetails.setValue({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          password: encodedPassword,
          confirmPassword: encodedPassword,
        });

        this.personalDetails.setValue({
          email: res.data.email,
          phoneNumber: res.data.phoneNumber,
          country: res.data.countryId,
          city: res.data.cityId,
        });

        this.configurationDetails.setValue({
          role: res.data['role'],
          status: res.data['status'].toString(),
          manager: res.data['manager'],
        });
      },
      error: (err) => {
        this.notifyService.showError(ErrorMessages.ApiErrorMessage.ApiFailed);
      },
    });
  }

  // method for check if password field is blurred or not according to this margin is given to confirm password field
  validatePassword() {
    this.isPasswordBlur = true;
  }

  //function for hide show password
  hideShowPassword(event: any) {
    if (event.name === 'password') {
      if (event.type === 'text') {
        this.typeOfPassword = 'password';
        this.iconName = this.EYE_ICON;
      } else {
        this.typeOfPassword = 'text';
        this.iconName = this.RED_EYE;
      }
    } else {
      if (event.type === 'text') {
        this.typeOfConfirmPassword = 'password';
        this.iconNameForConfirmPassword = this.EYE_ICON;
      } else {
        this.typeOfConfirmPassword = 'text';
        this.iconNameForConfirmPassword = this.RED_EYE;
      }
    }
  }

  //api call for update or add new user
  submitUser() {
    if (this.configurationDetails.value['status'] == 'true') {
      this.userStatus = true;
    } else {
      this.userStatus = false;
    }

    const payload = {
      userId: this.userId,
      firstName: this.basicDetails.value['firstName'],
      lastName: this.basicDetails.value['lastName'],
      password: this.basicDetails.value['password'],
      email: this.personalDetails.value['email'],
      countryId: this.personalDetails.value['country'],
      cityId: this.personalDetails.value['city'],
      phoneNumber: this.personalDetails.value['phoneNumber'],
      role: this.configurationDetails.value['role'],
      status: this.userStatus,
      manager: this.configurationDetails.value['manager'],
    };

    this.adminService.UpdateUserData(payload).subscribe({
      next: (res) => {
        if (res.statusCode == 200) {
          this.notifyService.showSuccess(res.message);
          this.router.navigate(['/AdminPanel/user']);
        } else {
          this.notifyService.showInfo(res.message);
        }
      },
      error: (err) => {
        this.notifyService.showError(ErrorMessages.ApiErrorMessage.ApiFailed);
      },
    });
  }
}
