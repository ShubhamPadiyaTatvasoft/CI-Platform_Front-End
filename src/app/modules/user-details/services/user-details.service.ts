import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChangePassword } from 'src/app/interfaces/change-password';
import { UserDetails } from 'src/app/interfaces/user-details';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http: HttpClient) { }
  getCountryList() {
    return this.http.get<any>(`${environment.baseURL}Common/GetCountryList`);
  }

  getCityList(countryId: number) {
    return this.http.get<any>(`${environment.baseURL}Common/GetCitiesListByCountryId?countryId=${countryId}`);
  }

  getAvailability() {
    return this.http.get<any>(`${environment.baseURL}Common/GetAvailability`);
  }

  getAllSkills() {
    return this.http.get<any>(`${environment.baseURL}Common/GetSkillsList`);
  }

  getUserDetails(userId: number) {
    return this.http.get<any>(`${environment.baseURL}UserProfile/GetUserDetails?userId=${userId}`);
  }

  changePassword(changePass: ChangePassword) {
    return this.http.post<any>(`${environment.baseURL}UserProfile/ChangePassword`, changePass);
  }

  updateUserProfile(userForm: UserDetails) {
    return this.http.post<any>(`${environment.baseURL}UserProfile/UpdateUserDetails`, userForm);
  }
}
