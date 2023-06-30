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

  routerLinks: any[] = [
    {
      link: '/AdminPanel/user',
      pageName: 'Users',
      icon: 'person',
    },
    {
      link: '/AdminPanel/CMSPage',
      pageName: 'CMS Pages',
      icon: 'library_books',
    },
    {
      link: '/AdminPanel/Mission',
      pageName: 'Mission',
      icon: 'account_balance',
    },
    {
      link: '/AdminPanel/MissionTheme',
      pageName: 'Mission Theme',
      icon: 'dashboard',
    },
    {
      link: '/AdminPanel/MissionSkills',
      pageName: 'Mission Skills',
      icon: 'stars',
    },
    {
      link: '/AdminPanel/MissionApplication',
      pageName: 'Mission Application',
      icon: 'insert_drive_file',
    },
    {
      link: '/AdminPanel/Story',
      pageName: 'Story',
      icon: 'assistant',
    },
    {
      link: '/AdminPanel/BannerManagement',
      pageName: 'Banner Management',
      icon: 'camera_roll',
    },
  ];

  constructor(
    private loginService: LoginServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.currentUrl = this.router.url;
    //console.log(this.router.url);

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
