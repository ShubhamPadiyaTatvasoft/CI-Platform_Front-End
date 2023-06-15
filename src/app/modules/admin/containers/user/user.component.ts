import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/modules/auth/services/login-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  constructor(private loginService: LoginServiceService) {}

  logout() {
    this.loginService.signOut();
  }
}
