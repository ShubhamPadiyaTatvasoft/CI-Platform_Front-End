import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { FormValidationService } from 'src/shared/services/form-validation.service';
import { NotificationService } from 'src/shared/services/notification.service';

@Component({
  selector: 'app-mission-add-edit',
  templateUrl: './mission-add-edit.component.html',
  styleUrls: ['./mission-add-edit.component.scss'],
})
export class MissionAddEditComponent {
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
      } else {
      }
    });
  }
}
