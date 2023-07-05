import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/shared/services/notification.service';
import { VolunteerMissionService } from '../../services/volunteer-mission.service';
import { VolunteerMissionCardModel } from 'src/app/interfaces/volunteer-mission';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mission-tab-layout',
  templateUrl: './mission-tab-layout.component.html',
  styleUrls: ['./mission-tab-layout.component.scss'],
})
export class MissionTabLayoutComponent implements OnInit, OnChanges {
  missionId: number;
  docpath: string[];
  docname: string[];
  doctype: string[];
  documents: string[];
  comment: any[];
  CommentForm: FormGroup;
  commentsInput: string;

  constructor(
    private notifyService: NotificationService,
    private route: ActivatedRoute,
    private router: Router,
    private volunteerMissionService: VolunteerMissionService,
    private fb: FormBuilder
  ) {}
  @Input() MissionData: VolunteerMissionCardModel;
  @Input() userId: number;

  ngOnInit(): void {
    this.createForm();
  }

  ngOnChanges(): void {
    this.route.params.subscribe((params) => {
      this.missionId = params['missionId'];
    });

    this.docpath = this.MissionData.documentPath.split('&');
    this.docname = this.MissionData.documentName.split(',');
    this.doctype = this.MissionData.documentType.split(',');

    this.getcomment(this.missionId);
    //this.submitCommnent(this.MissionData.missionId);
  }
  createForm() {
    this.CommentForm = this.fb.group({
      commentsInput: [''],
    });
    
  }
  getcomment(missionId: number) {
    this.volunteerMissionService.getComment(+missionId).subscribe({
      next: (res) => {
        this.comment = res.data;
      },
    });
  }
  submitCommnent(commentText: string) {
    this.volunteerMissionService
      .postComment(+this.missionId, +this.userId, commentText)
      .subscribe({
        next: (res) => {
          if (res.statusCode === 200) {
            this.notifyService.showSuccess(res.message);
            this.getcomment(this.missionId);
          } else {
            this.notifyService.showError(res.message);
          }
          
        },
      });
  }
}
