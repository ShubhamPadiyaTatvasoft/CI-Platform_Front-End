import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/modules/auth/services/login-service.service';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
})
export class SideNavigationComponent implements OnInit {
  hideSidebar = true;
  currentDatetime: string;
  MENUICON = 'menu';
  CLEARICON = 'clear';
  currentUrl: string;
  constructor(
    private loginService: LoginServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.currentUrl = this.router.url;
    console.log(this.router.url);

    setInterval(() => {
      this.currentDatetime = Date();
    }, 100);
  }

  toggleSidebar(event: any) {
    var eventInnerhtml = event._elementRef.nativeElement.innerHTML;

    if (eventInnerhtml === 'menu') {
      this.hideSidebar = false;
    } else {
      this.hideSidebar = true;
    }
  }

  logout() {
    this.loginService.signOut();
  }
}
