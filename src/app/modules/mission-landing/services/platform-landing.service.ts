import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlatformLandingService {
  constructor(private http:HttpClient) {}

  LandingPageDataGetAndPost(LandingPageData : object){
    return this.http.post<any>(environment.baseURL + "LandingPage/MissionCardsData",LandingPageData);
  }
}
