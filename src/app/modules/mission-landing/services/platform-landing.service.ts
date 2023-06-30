import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlatformLandingService {
  constructor(private http:HttpClient) {}

  landingPageDataGetAndPost(LandingPageData : object){
    return this.http.post<any>(environment.baseURL + "LandingPage/MissionCardsData",LandingPageData);
  }

  favMissionUpdated(missionId:any , userId : any){
    return this.http.post<any>(environment.baseURL + `LandingPage/FavMissionUpdate?MissionId=${missionId}&UserId=${userId}`,{});
  }

  recommendedMissionUserList(missionId:any ,userId:any){
    return this.http.post<any>(environment.baseURL + `LandingPage/RecommendedUserGet?MissionId=${missionId}&UserId=${userId}`,{});
  }
}
