import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorMessages } from 'src/app/common/errorMsg.static';
import { FormValidationService } from 'src/shared/services/form-validation.service';
import { AdminService } from '../../services/admin.service';
import { NotificationService } from 'src/shared/services/notification.service';

@Component({
  selector: 'app-cms-pages-add-edit',
  templateUrl: './cms-pages-add-edit.component.html',
  styleUrls: ['./cms-pages-add-edit.component.scss'],
})
export class CMSPagesAddEditComponent implements OnInit {
  cmsId: number;
  action: string;
  cmsDetails: FormGroup;
  errorMessage = ErrorMessages;
  preLoader: string = 'hidden';

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
        this.cmsId = +params['id'];
        setTimeout(() => {
          this.getCmsData(+params['id']);
        }, 1000);
      } else {
        this.cmsId = 0;
        this.action = 'add';
      }
    });
  }

  //create form for cms add edit
  createForm() {
    this.cmsDetails = this.formBuilder.group({
      cmsTitle: ['', Validators.required],
      cmdDescription: ['', Validators.required],
      cmsSlug: ['', Validators.required],
      status: ['Active', Validators.required],
    });
  }

  //api call for get cms data for edit cms from cms id
  getCmsData(cmsId: number) {
    this.preLoader = 'inline-block absolute';
    this.adminService.getCmsData(cmsId).subscribe({
      next: (res) => {
        this.preLoader = 'hidden';
        if (res.statusCode == 200) {
          this.cmsDetails.setValue({
            cmsTitle: res.data['title'],
            cmdDescription: res.data['description'],
            cmsSlug: res.data['slug'],
            status: res.data['status'],
          });
        }
      },
      error: (err) => {
        this.preLoader = 'hidden';
        this.notifyService.showError(ErrorMessages.ApiErrorMessage.ApiFailed);
      },
    });
  }

  //add or update data using api
  addUpdateCms() {
    this.preLoader = 'inline-block absolute';
    const payload = {
      cmsPageId: this.cmsId,
      title: this.cmsDetails.value['cmsTitle'],
      description: this.cmsDetails.value['cmdDescription'],
      slug: this.cmsDetails.value['cmsSlug'],
      status: this.cmsDetails.value['status'],
    };
    this.adminService.addEditCms(payload).subscribe({
      next: (res) => {
        this.preLoader = 'hidden';
        if (res.statusCode == 200) {
          this.notifyService.showSuccess(res.message);
          this.router.navigate(['/AdminPanel/CMSPage']);
        }
      },
      error: (err) => {
        this.preLoader = 'hidden';
        this.notifyService.showError(ErrorMessages.ApiErrorMessage.ApiFailed);
      },
    });
  }
}
