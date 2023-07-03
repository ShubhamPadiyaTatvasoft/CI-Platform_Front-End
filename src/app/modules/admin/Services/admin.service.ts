import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getAllUser(search: any) {
    const payload = {
      search: search,
    };
    return this.http.post<any>(
      `${environment.baseURL}Admin/GetAllUser`,
      payload
    );
  }

  getAllMission(search: any) {
    const payload = {
      search: search,
    };
    return this.http.post<any>(
      `${environment.baseURL}Admin/GetAllMission`,
      payload
    );
  }

  getAllCMS(search: any) {
    const payload = {
      search: search,
    };
    return this.http.post<any>(
      `${environment.baseURL}Admin/GetAllCMSPage`,
      payload
    );
  }

  GetAllCountryTheme() {
    return this.http.get<any>(
      `${environment.baseURL}Admin/GetListOfCityCountryThemeSkills`
    );
  }

  GetAllCity(countryId: any) {
    return this.http.post<any>(
      `${environment.baseURL}Admin/GetListOfCityBasedOnCountry`,
      countryId
    );
  }

  GetUserData(userId: any) {
    return this.http.post<any>(
      `${environment.baseURL}Admin/GetUserDataFromID`,
      userId
    );
  }

  UpdateUserData(payload: any) {
    return this.http.post<any>(
      `${environment.baseURL}Admin/UpdateUserData`,
      payload
    );
  }

  DeleteUser(userId: any) {
    return this.http.post<any>(
      `${environment.baseURL}Admin/DeleteUserData`,
      userId
    );
  }

  addEditMission(data: any) {
    return this.http.post<any>(
      `${environment.baseURL}Admin/AddUpdateMission`,
      data
    );
  }

  getMissionData(missionId: any) {
    return this.http.post<any>(
      `${environment.baseURL}Admin/GetMissionDataFromId`,
      missionId
    );
  }

  deleteMission(missionId: any) {
    return this.http.post<any>(
      `${environment.baseURL}Admin/DeleteMission`,
      missionId
    );
  }

  addEditCms(cmsData: any) {
    return this.http.post<any>(
      `${environment.baseURL}Admin/AddEditCms`,
      cmsData
    );
  }
  getCmsData(cmsId: any) {
    return this.http.post<any>(
      `${environment.baseURL}Admin/GetCmsDataFromId`,
      cmsId
    );
  }
  deleteCms(cmsId: number) {
    return this.http.post<any>(`${environment.baseURL}Admin/DeleteCms`, cmsId);
  }
}
