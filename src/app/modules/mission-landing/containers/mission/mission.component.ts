import { Component, OnInit } from '@angular/core';
import { LandingPageApiCall } from 'src/app/interfaces/landing-page-api-call';
import { PlatformLandingService } from '../../services/platform-landing.service';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {

  missionDataObj: any;
  landingPage !: LandingPageApiCall;
  public isGridView = true;
  public isMissionCard =true;

  constructor(private landingPageService : PlatformLandingService){
    this.landingPage = {} as LandingPageApiCall;
  }

  ngOnInit(){
    this.LandingPageData();
  }

  LandingPageData(){
  this.landingPage.loginUserId = 1;
   this.landingPageService.LandingPageDataGetAndPost(this.landingPage).subscribe((res :any) =>{
      this.missionDataObj = res.data;
      console.log(res);
    },
    (e:any) => {
      console.log(e);
    });
  }
}
