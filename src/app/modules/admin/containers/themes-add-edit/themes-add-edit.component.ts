import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { FormValidationService } from 'src/shared/services/form-validation.service';
import { NotificationService } from 'src/shared/services/notification.service';
import { ErrorMessages } from 'src/app/common/errorMsg.static';

@Component({
  selector: 'app-themes-add-edit',
  templateUrl: './themes-add-edit.component.html',
  styleUrls: ['./themes-add-edit.component.scss'],
})
export class ThemesAddEditComponent implements OnInit {
  themeId: number;
  action: string;
  errorMessage = ErrorMessages;
  themeDetails: FormGroup;
  preLoader: string = 'hidden';

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    public formValidationService: FormValidationService,
    private router: Router,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id'] != null) {
        this.themeId = +params['id'];
        setTimeout(() => {
          this.getThemeData(+params['id']);
        }, 1000);
      } else {
        this.themeId = 0;
      }
    });
    this.createForm();
  }

  //create form for theme add edit
  createForm() {
    this.themeDetails = this.formBuilder.group({
      themeTitle: ['', Validators.required],
      status: ['Active', Validators.required],
    });
  }

  //api call for get theme data from id
  getThemeData(themeId: number) {
    this.preLoader = 'inline-block absolute';
    this.adminService.GetThemeData(themeId).subscribe({
      next: (res) => {
        this.preLoader = 'hidden';
        this.themeDetails.setValue({
          themeTitle: res.data.title,
          status: res.data.status,
        });
      },
      error: (err) => {
        this.preLoader = 'hidden';
        this.notifyService.showError(ErrorMessages.ApiErrorMessage.ApiFailed);
      },
    });
  }

  //api call for add update theme
  addUpdateTheme() {
    const payload = {
      themeId: this.themeId,
      themeTitle: this.themeDetails.value['themeTitle'],
      themeStatus: this.themeDetails.value['status'],
    };
    this.adminService.AddUpdateTheme(payload).subscribe({
      next: (res) => {
        this.preLoader = 'hidden';
        if (res.statusCode == 409) {
          this.notifyService.showWarning(res.message);
        } else {
          this.notifyService.showSuccess(res.message);
          this.router.navigate(['/AdminPanel/MissionTheme']);
        }
      },
      error: () => {
        this.preLoader = 'hidden';
        this.notifyService.showError(ErrorMessages.ApiErrorMessage.ApiFailed);
      },
    });
  }
}
