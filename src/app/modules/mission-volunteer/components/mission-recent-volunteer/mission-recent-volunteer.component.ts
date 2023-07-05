import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { VolunteerMissionCardModel } from 'src/app/interfaces/volunteer-mission';
import { NotificationService } from 'src/shared/services/notification.service';
import { VolunteerMissionService } from '../../services/volunteer-mission.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mission-recent-volunteer',
  templateUrl: './mission-recent-volunteer.component.html',
  styleUrls: ['./mission-recent-volunteer.component.scss'],
})
export class MissionRecentVolunteerComponent implements OnInit, OnChanges {
  missionId: number;
  recentVolunteer: any[];
  @Input() userId: number;
  @Input() MissionData: VolunteerMissionCardModel;
  constructor(
    private notifyService: NotificationService,
    private volunteerMissionService: VolunteerMissionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.missionId = params['missionId'];
    });
  }

  ngOnChanges(): void {
    this.getrecentVolunteer1();
  }

  getrecentVolunteer1() {
    this.volunteerMissionService
      .getRecentVolunteer(this.missionId, this.userId)
      .subscribe({
        next: (res) => {
          this.recentVolunteer = res.data;
        },
      });
  }
}
