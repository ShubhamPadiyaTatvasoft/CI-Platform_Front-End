import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RecommendService } from 'src/shared/services/recommend.service';
import { NotificationService } from 'src/shared/services/notification.service';

@Component({
  selector: 'app-mission-story-recommendation-dialog',
  templateUrl: './mission-story-recommendation-dialog.component.html',
  styleUrls: ['./mission-story-recommendation-dialog.component.scss']
})
export class MissionStoryRecommendationDialogComponent implements OnInit {
  isDisabled = false;

  constructor(@Inject(MAT_DIALOG_DATA) public userDetail: any, private dialogRef: MatDialogRef<MissionStoryRecommendationDialogComponent>, private recommendService: RecommendService, private notifyService: NotificationService) { }

  ngOnInit() {
    console.log(this.userDetail);
  }

  invite(userId: number, email: string, inviteMissionId: number) {
    this.isDisabled = true;
    let loginUserId = 1;
    this.recommendService.RecommendedToFriends(inviteMissionId, loginUserId, userId, email).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.notifyService.showSuccess(res.message);
      }
      else {
        this.notifyService.showError(res.message);
      }
      this.isDisabled = false;
    },
    (e: any) => {
      this.notifyService.showError(e);
      this.isDisabled = false;
    });
  }

  close() {
    this.dialogRef.close();
  }
}
