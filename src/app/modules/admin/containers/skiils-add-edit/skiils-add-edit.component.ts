import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorMessages } from 'src/app/common/errorMsg.static';
import { AdminService } from '../../services/admin.service';
import { FormValidationService } from 'src/shared/services/form-validation.service';
import { NotificationService } from 'src/shared/services/notification.service';

@Component({
  selector: 'app-skiils-add-edit',
  templateUrl: './skiils-add-edit.component.html',
  styleUrls: ['./skiils-add-edit.component.scss'],
})
export class SkiilsAddEditComponent implements OnInit {
  skillId: number;
  action: string;
  errorMessage = ErrorMessages;
  skillDetails: FormGroup;
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
        this.skillId = +params['id'];
        setTimeout(() => {
          this.getSkillData(+params['id']);
        }, 1000);
      } else {
        this.skillId = 0;
      }
    });
    this.createForm();
  }

  //create form for theme add edit
  createForm() {
    this.skillDetails = this.formBuilder.group({
      skillName: ['', Validators.required],
      status: ['Active', Validators.required],
    });
  }

  //api call for get theme data from id
  getSkillData(themeId: number) {
    this.preLoader = 'inline-block absolute';
    this.adminService.GetSkillData(themeId).subscribe({
      next: (res) => {
        this.preLoader = 'hidden';
        this.skillDetails.setValue({
          skillName: res.data.skillName,
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
  addUpdateSkills() {
    const payload = {
      skillId: this.skillId,
      skillName: this.skillDetails.value['skillName'],
      skillStatus: this.skillDetails.value['status'],
    };
    this.adminService.AddUpdateSkill(payload).subscribe({
      next: (res) => {
        this.preLoader = 'hidden';
        if (res.statusCode == 409) {
          this.notifyService.showWarning(res.message);
        } else {
          this.notifyService.showSuccess(res.message);
          this.router.navigate(['/AdminPanel/MissionSkills']);
        }
      },
      error: () => {
        this.preLoader = 'hidden';
        this.notifyService.showError(ErrorMessages.ApiErrorMessage.ApiFailed);
      },
    });
  }
}
