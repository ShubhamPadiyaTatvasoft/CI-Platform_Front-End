import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MissionRecommandedDialogBoxComponent } from '../mission-recommanded-dialog-box/mission-recommanded-dialog-box.component';
import { NotificationService } from 'src/shared/services/notification.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { VolunteerMissionService } from '../../services/volunteer-mission.service';
import { VolunteerMissionCardModel } from 'src/app/interfaces/volunteer-mission';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mission-information',
  templateUrl: './mission-information.component.html',
  styleUrls: ['./mission-information.component.scss'],
})
export class MissionInformationComponent implements OnInit, OnChanges {
  missionId: number;
  rating: number;
  public form: FormGroup;

  constructor(
    public dialog: MatDialog,
    private notifyService: NotificationService,
    private route: ActivatedRoute,
    private router: Router,
    private volunteerMissionService: VolunteerMissionService,
    private fb: FormBuilder
  ) {}
  @Input() MissionData: VolunteerMissionCardModel;
  @Input() userId: number;
  @Output() missionIds = new EventEmitter<number>();

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.missionId = params['missionId'];
    });
  }
  ngOnChanges(): void {
    this.form = this.fb.group({
      rating: ['', Validators.required],
    });
   
    this.form.setValue({
      rating: this.MissionData.ratings,
    });
  }

  counter(i: number) {
    return new Array(i);
  }

  starrating(rating: number) {
    this.volunteerMissionService
      .postrating(this.missionId, this.userId, rating)
      .subscribe({
        next: (res) => {
          if (res.statusCode === 200) {
            this.notifyService.showSuccess(res.message);
          } else {
            this.notifyService.showError(res.message);
          }
        },
      });
  }

  openDialog() {
    this.volunteerMissionService.openConfirmDialogue(
      this.MissionData.missionId
    );
    //this.dialog.open(MissionRecommandedDialogBoxComponent);
  }

  AddToFavourite() {
    this.volunteerMissionService
      .addtofavourite(this.userId, this.missionId)
      .subscribe({
        next: (res) => {
          if (res.statusCode === 200) {
            this.notifyService.showSuccess(res.message);
            this.MissionData.isFavMission
              ? (this.MissionData.isFavMission = false)
              : (this.MissionData.isFavMission = true);
          } else {
            this.notifyService.showError(res.message);
          }
        },
      });
  }

  Applymission() {
    this.volunteerMissionService
      .applyMission(this.missionId, this.userId)
      .subscribe({
        next: (res) => {
          if (res.statusCode === 200) {
            this.notifyService.showSuccess(res.message);
          } else {
            this.notifyService.showError(res.message);
          }
          this.MissionData.approvalStatus
            ? (this.MissionData.approvalStatus = 'approve')
            : (this.MissionData.approvalStatus = 'pending');
        },
      });
  }
}
