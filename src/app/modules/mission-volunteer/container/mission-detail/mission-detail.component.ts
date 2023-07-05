import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/shared/services/notification.service';
import { VolunteerMissionService } from '../../services/volunteer-mission.service';
import { VolunteerMissionCardModel } from '../../../../interfaces/volunteer-mission';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginServiceService } from 'src/app/modules/auth/services/login-service.service';

@Component({
  selector: 'app-mission-detail',
  templateUrl: './mission-detail.component.html',
  styleUrls: ['./mission-detail.component.scss'],
})
export class MissionDetailComponent implements OnInit {
  missionId: number;
  token: any;

  userId: number;
  volunteerMissionCardModel: VolunteerMissionCardModel;
  constructor(
    public notify: NotificationService,
    private volunteerMissionService: VolunteerMissionService,
    private route: ActivatedRoute,
    private loginService: LoginServiceService
  ) {}

  ngOnInit(): void {
    this.token = this.loginService.getToken();
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.token);

    this.userId = decodedToken['unique_name'].split(',')[2];

    this.route.params.subscribe((params) => {
      this.missionId = params['missionId'];
    });

    this.getmissionDetails(this.missionId, this.userId);
  }

  getmissionDetails(missionId: number, userId: number) {
    this.volunteerMissionService
      .getMissionVolunteer(missionId, userId)
      .subscribe({
        next: (res) => {
          this.volunteerMissionCardModel = {
            missionId: res.data.missionId,
            title: res.data.title,
            missionType: res.data.missionType,
            shortDescription: res.data.shortDescription,
            description: res.data.description,
            startDate: res.data.startDate,
            endDate: res.data.endDate,
            countryName: res.data.countryName,
            cityName: res.data.cityName,
            themeName: res.data.themeName,
            organizationDetail: res.data.organizationDetail,
            organizationName: res.data.organizationName,
            leftSeats: res.data.leftSeats,
            ratings: res.data.ratings,
            goalObjectiveText: res.data.goalObjectiveText,
            goalValue: res.data.goalValue,
            approvalStatus: res.data.approvalStatus,
            isFavMission: res.data.isFavMission,
            documentPath: res.data.documentPath,
            documentName: res.data.documentName,
            documentType: res.data.documentType,
            mAvailability: res.data.mAvailability,
            skillName: res.data.skillName,
            avgRating: res.data.avgRating,
            deadline: res.data.deadline,
            mediaPath: res.data.mediaPath,
          };
        },
      });
  }
}
