import { Component, OnInit } from '@angular/core';
import { LandingPageApiCall } from 'src/app/interfaces/landing-page-api-call';
import { PlatformLandingService } from '../../services/platform-landing.service';
import { NotificationService } from 'src/shared/services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { MissionStoryRecommendationDialogComponent } from 'src/shared/components/mission-story-recommendation-dialog/mission-story-recommendation-dialog.component';

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

  constructor(private landingPageService : PlatformLandingService , private notifyService: NotificationService, public dialog: MatDialog){
    this.landingPage = {} as LandingPageApiCall;
  }

  ngOnInit(){
    this.landingPageData();
  }

  landingPageData(){
  this.landingPage.loginUserId = 1;
   this.landingPageService.landingPageDataGetAndPost(this.landingPage).subscribe((res :any) =>{
      this.missionDataObj = res.data;
      console.log(res);
    },
    (e:any) => {
      console.log(e);
    });
  }

  favMissionUpdate(favMissionId:any) {
    let loginUserId = 1;
    this.landingPageService.favMissionUpdated(favMissionId , loginUserId).subscribe((res : any) =>{
      if(res.statusCode == 200){
        this.missionDataObj.find(function(item:any){
          if(favMissionId == item.mission.missionId){
            item.isfavMission = !item.isfavMission;
          }
        });
      }
      else{
        this.notifyService.showError(res.message);
      }
    },
    (e : any) => {

    })
  }

  recommendedMission(missionId : any){
    let loginUserId = 1;
    this.landingPageService.recommendedMissionUserList(missionId,loginUserId).subscribe((res:any)=>{
      console.log(res.data);
      this.dialog.open(MissionStoryRecommendationDialogComponent,{data : {userList:res.data,missionId:missionId} , width:'600px'},);
    },
    (e:any)=>{
      console.log(e);
    })
  }
}
