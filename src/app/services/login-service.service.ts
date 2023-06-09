import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  // private baseUrl: string = 'https://localhost:44335/api/User/';

  private baseUrlUser: string = environment.baseURLUser;
  private baseUrlLandingPage: string = environment.baseURLLandingPage;
  constructor(private http: HttpClient, private router: Router) {}

  //api for login service
  login(loginObj: any) {
    return this.http.post<any>(`${this.baseUrlUser}login`, loginObj);
  }

  //api for get detail of all the users
  getUsers() {
    return this.http.get<any>(`${this.baseUrlUser}getUser`);
  }

  //api for get detail of all the Missions
  getMissions() {
    return this.http.get<any>(`${this.baseUrlLandingPage}LandingPage`);
  }

  //api for testing purpose only(not from pur backend side)
  getFakeUsers() {
    const url = 'https://randomuser.me/api/?results=100';
    return this.http.get<any>(url);
  }

  //service for sign-out user
  signOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  //service for store token in local storage
  storeToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue);
  }

  //service for get token from local storage
  getToken() {
    return localStorage.getItem('token');
  }

  //service for get token from local storage for check user already logged in
  isLoggedIn() {
    return localStorage.getItem('token');
  }
}
