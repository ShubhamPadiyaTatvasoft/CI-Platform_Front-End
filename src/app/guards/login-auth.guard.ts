import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { LoginServiceService } from '../modules/auth/services/login-service.service';
import { NotificationService } from '../modules/auth/services/notification.service';

@Injectable({
  providedIn: 'root',
})
export class LoginAuthGuard implements CanActivate {
  constructor(
    private login: LoginServiceService,
    private router: Router,
    private notifyService: NotificationService
  ) {}

  //function for checking the token valid and time not exceeded of token and redirect according to this
  canActivate() {
    if (this.login.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['']);
      this.notifyService.showError('Please Login First!!');
      return false;
    }
  }
}
