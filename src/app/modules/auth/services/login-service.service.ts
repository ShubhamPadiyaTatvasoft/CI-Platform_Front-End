import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  constructor(private http: HttpClient, private router: Router) {}

  //api for login service
  login(loginObj: any) {
    return this.http.post<any>(`${environment.baseURL}User/login`, loginObj);
  }

  //api for forget password
  forgetPassword(email: string) {
    return this.http.post<any>(
      `${environment.baseURL}User/ForgetPassword/${email}`,
      {}
    );
  }

  //api for reset password
  resetPassword(email: string, token: string, newPassword: string) {
    return this.http.post<any>(
      `${environment.baseURL}User/ResetPassword/${email}/${token}/${newPassword}`,
      {}
    );
  }

  //service for sign-out user
  signOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  //service for sign-out user
  register(userObj: any) {
    return this.http.post<any>(`${environment.baseURL}User/register`, userObj);
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
