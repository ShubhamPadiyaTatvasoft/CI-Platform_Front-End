import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorMessages } from 'src/app/common/errorMsg.static';
import { FormValidationService } from 'src/shared/services/form-validation.service';
import { NotificationService } from 'src/shared/services/notification.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-banner-management-add-edit',
  templateUrl: './banner-management-add-edit.component.html',
  styleUrls: ['./banner-management-add-edit.component.scss'],
})
export class BannerManagementAddEditComponent implements OnInit {
  bannerId: number;
  action: string;
  bannerDetails: FormGroup;
  errorMessage = ErrorMessages;
  preLoader: string = 'hidden';
  images: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private notifyService: NotificationService,
    public formValidationService: FormValidationService,
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.route.params.subscribe((params) => {
      if (params['id'] != null) {
        this.bannerId = +params['id'];
        setTimeout(() => {
          this.getBannerData(+params['id']);
        }, 1000);
      } else {
        this.bannerId = 0;
        this.action = 'add';
      }
    });
  }

  //create form for cms add edit
  createForm() {
    this.bannerDetails = this.formBuilder.group({
      bannerText: ['', Validators.required],
      sortOrder: ['', Validators.required],
      bannerImage: [''],
    });
  }

  //get banner data for edit from its id
  getBannerData(id: number) {
    this.preLoader = 'inline-block absolute';

    this.adminService.GetBannerData(id).subscribe({
      next: (res) => {
        this.bannerDetails.setValue({
          bannerText: res.data.text,
          sortOrder: res.data.sortOrder,
          bannerImage: '',
        });
        this.images.push(res.data.image);
        this.preLoader = 'hidden';
      },
      error: (err) => {
        this.preLoader = 'hidden';
        this.notifyService.showError(ErrorMessages.ApiErrorMessage.ApiFailed);
      },
    });
  }

  //convert image into base64 and add into image array
  onFileChangeForImage(event: any) {
    this.images = [];
    event.preventDefault();
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        if (
          event.target.files[i].type.match('image/png|image/jpeg|image/jpg')
        ) {
          var reader = new FileReader();

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

  //delete image from array
  deleteImageFromArray(id: number) {
    this.images.splice(id, 1);
  }

  //send data for add or update banner
  addUpdateBanner() {
    const payload = {
      bannerText: this.bannerDetails.value['bannerText'],
      sortOrder: +this.bannerDetails.value['sortOrder'],
      images: this.images,
      bannerId: +this.bannerId,
    };
    this.preLoader = 'inline-block absolute';
    this.adminService.AddUpdateBanner(payload).subscribe({
      next: (res) => {
        if (res.statusCode == 200) {
          this.notifyService.showSuccess(res.message);
          this.preLoader = 'hidden';
          this.router.navigate(['/AdminPanel/BannerManagement']);
        } else {
          this.notifyService.showWarning(res.message);
          this.preLoader = 'hidden';
        }
      },
      error: (err) => {
        this.preLoader = 'hidden';
        this.notifyService.showError(ErrorMessages.ApiErrorMessage.ApiFailed);
      },
    });
  }
}
