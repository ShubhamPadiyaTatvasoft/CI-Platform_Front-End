import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { MissionRecommandedDialogBoxComponent } from '../components/mission-recommanded-dialog-box/mission-recommanded-dialog-box.component';

@Injectable({
  providedIn: 'root',
})
export class VolunteerMissionService {
  constructor(private http: HttpClient, private dialog: MatDialog) {}
  openConfirmDialogue(messageFromComponent: number) {
    return this.dialog.open(MissionRecommandedDialogBoxComponent, {
      width: '30%',
      disableClose: true,
      data: {
        message: messageFromComponent,
      },
    });
  }
  getMissionVolunteer(missionId: number, userId: number) {
    const payload = {
      userId: +userId,
      missionId: +missionId,
    };
    return this.http.post<any>(
      `${environment.baseURL}VolunteerMission/AllMissionData`,
      payload
    );
  }

  addtofavourite(missionId: number, userId: number) {
    const payload = {
      userId: +userId,
      missionId: +missionId,
    };
    return this.http.post<any>(
      `${environment.baseURL}VolunteerMission/AddToFavourite`,
      payload
    );
  }
  applyMission(missionId: number, userId: number) {
    const payload = {
      userId: +userId,
      missionId: +missionId,
    };
    return this.http.post<any>(
      `${environment.baseURL}VolunteerMission/ApplyMission`,
      payload
    );
  }
  getComment(missionId: number) {
    return this.http.post<any>(
      `${environment.baseURL}VolunteerMission/GetComment`,
      missionId
    );
  }
  postComment(missionId: number, userId: number, commentText: string) {
    const payload = {
      userId: +userId,
      missionId: +missionId,
      commentText: commentText,
    };
    return this.http.post<any>(
      `${environment.baseURL}VolunteerMission/Comment`,
      payload
    );
  }
  getRecentVolunteer(missionId: number, userId: number) {
    const payload = {
      userId: +userId,
      missionId: +missionId,
    };
    return this.http.post<any>(
      `${environment.baseURL}VolunteerMission/GetRecentVolunteer`,
      payload
    );
  }

  postrating(missionId: number, userId: number, rating: number) {
    const payload = {
      userId: +userId,
      missionId: +missionId,
      rating: +rating,
    };
  

    return this.http.post<any>(
      `${environment.baseURL}VolunteerMission/Ratings`,
      payload
    );
  }

  Recommanded(Email: string[], missionId: number, userId: number) {
    const payload = {
      userId: +userId,
      missionId: +missionId,
      Email: Email,
    };
    return this.http.post<any>(
      `${environment.baseURL}VolunteerMission/RecommandedCoworker`,
      payload
    );
  }

  GetUserDeatails(userId: any) {
    return this.http.get<any>(
      `${environment.baseURL}VolunteerMission/GetUserDetails?userId=${userId}`
    );
  }
}
