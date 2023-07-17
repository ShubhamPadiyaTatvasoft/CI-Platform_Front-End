import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(private http: HttpClient) { }

  saveStory(storyData: FormData) {
    return this.http.post(`${environment.baseURL}Story/SaveOrUpdate`, storyData);
  }

  getApprovedMissions(userId: number) {
    return this.http.get<any>(`${environment.baseURL}Story/ListOfMission?userId=${userId}`);
  }

  getStoryCardData() {
    return this.http.get<any>(`${environment.baseURL}Story/StoryCardsData`);
  }

  getStoryDetails(userId: number, StoryId: number) {
    return this.http.get<any>(`${environment.baseURL}Story/StoryDetailsData?userId=${userId}&StoryId=${StoryId}`);
  }
}