import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlatformLandingService {
  apiUrl = environment.baseURL + "LandingPage";

  constructor(private http:HttpClient) {}

  landingPageDataGetAndPost(LandingPageData : object){
    return this.http.post<any>(`${this.apiUrl}/MissionCardsData`,LandingPageData);
  }

  favMissionUpdated(missionId:any , userId : any){
    return this.http.post<any>(`${this.apiUrl}/FavMissionUpdate?MissionId=${missionId}&UserId=${userId}`,{});
  }

  recommendedMissionUserList(missionId:any ,userId:any){
    return this.http.post<any>(`${this.apiUrl}/RecommendedUserGet?MissionId=${missionId}&UserId=${userId}`,{});
  }
}
