import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecommendService {

  constructor(private http:HttpClient) { }

  RecommendedToFriends(missionId:number ,fromUserId : number, toUserId: number, toEmail : string){
    return this.http.post<any>(`${environment.baseURL}LandingPage/RecommendedMission?MissionId=${missionId}&FromUserId=${fromUserId}&ToUserId=${toUserId}&toemail=${toEmail}`,{})
  }
}
