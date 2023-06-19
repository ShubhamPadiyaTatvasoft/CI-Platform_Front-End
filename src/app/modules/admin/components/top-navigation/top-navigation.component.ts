import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/modules/auth/services/login-service.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss'],
})
export class TopNavigationComponent implements OnInit {
  currentDatetime: string;
  constructor(private loginService: LoginServiceService) {}

  ngOnInit(): void {
    setInterval(() => {
      this.getCurrentDatetime();
    }, 100);
  }

  getCurrentDatetime() {
    this.currentDatetime = Date();
  }

  logout() {
    this.loginService.signOut();
  }
}
