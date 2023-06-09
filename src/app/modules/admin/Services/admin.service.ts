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
    return this.http.get<any>(
      `${environment.baseURL}Admin/GetAllCMSPage?search=${search}`
    );
  }

  getAllMissionApplication(search: any) {
    return this.http.get<any>(
      `${environment.baseURL}Admin/GetAllMissionApplication?search=${search}`
    );
  }

  getAllStories(search: any) {
    return this.http.get<any>(
      `${environment.baseURL}Admin/GetAllStories?search=${search}`
    );
  }

  getAllBannerData(search: any) {
    return this.http.get<any>(
      `${environment.baseURL}Admin/GetAllBanners?search=${search}`
    );
  }

  getAllSkills(search: any) {
    return this.http.get<any>(
      `${environment.baseURL}Admin/GetAllSkills?search=${search}`
    );
  }

  getAllThemes(search: any) {
    return this.http.get<any>(
      `${environment.baseURL}Admin/GetAllThemes?search=${search}`
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
    return this.http.get<any>(
      `${environment.baseURL}Admin/GetCmsDataFromId/${cmsId}`
    );
  }

  deleteCms(cmsId: number) {
    return this.http.post<any>(`${environment.baseURL}Admin/DeleteCms`, cmsId);
  }

  approveRejectMissionApplication(
    applicationId: number,
    approvalStatus: string
  ) {
    const payload = {
      missionApplicationId: +applicationId,
      approvalStatus: approvalStatus,
    };
    return this.http.post<any>(
      `${environment.baseURL}Admin/ApproveRejectMissionApplication`,
      payload
    );
  }

  approveRejectDeleteStory(storyId: number, status: string) {
    const payload = {
      storyId: +storyId,
      storyStatus: status,
    };
    return this.http.post<any>(
      `${environment.baseURL}Admin/ApproveRejectDeleteStory`,
      payload
    );
  }

  AddUpdateBanner(bannerData: any) {
    return this.http.post<any>(
      `${environment.baseURL}Admin/AddUpdateBanner`,
      bannerData
    );
  }

  GetBannerData(bannerId: number) {
    return this.http.get<any>(
      `${environment.baseURL}Admin/GetBannerDataFromId/${bannerId}`
    );
  }

  deleteBanner(bannerId: number) {
    return this.http.delete<any>(
      `${environment.baseURL}Admin/DeleteBanner/${bannerId}`
    );
  }

  GetThemeData(themeId: number) {
    return this.http.get<any>(
      `${environment.baseURL}Admin/GetThemeData/${themeId}`
    );
  }

  AddUpdateTheme(themeData: any) {
    return this.http.post<any>(
      `${environment.baseURL}Admin/AddUpdateTheme`,
      themeData
    );
  }

  deleteTheme(themeId: number) {
    return this.http.delete<any>(
      `${environment.baseURL}Admin/DeleteTheme/${themeId}`
    );
  }

  GetSkillData(skillId: number) {
    return this.http.get<any>(
      `${environment.baseURL}Admin/GetSkillData/${skillId}`
    );
  }

  AddUpdateSkill(skillData: any) {
    return this.http.post<any>(
      `${environment.baseURL}Admin/AddUpdateSkill`,
      skillData
    );
  }

  deleteSkill(skillId: number) {
    return this.http.delete<any>(
      `${environment.baseURL}Admin/DeleteSkill/${skillId}`
    );
  }
}
