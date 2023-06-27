import { Component, Input, OnInit } from '@angular/core';
import { MissionCardModel } from 'src/app/interfaces/mission-card-model';
import { TimeLineModel } from 'src/app/interfaces/time-line-model';
import { MissionModel } from 'src/app/interfaces/mission-model';


@Component({
  selector: 'app-mission-story-cards',
  templateUrl: './mission-story-cards.component.html',
  styleUrls: ['./mission-story-cards.component.scss']
})
export class MissionStoryCardsComponent implements OnInit{
  @Input('IsGridViewCheck') IsGridView!: boolean;
  @Input('IsMissionCardCheck') IsMissionCard!: boolean;
  @Input() CardDataObj: any;
  missionCard: MissionCardModel;
  timeLine : TimeLineModel;
  mission : MissionModel;

  constructor() {}

  public story = {
    imgUrl: '../assets/Images/Education-Supplies-for-Every--Pair-of-Shoes-Sold-1.png',
    title: "10 User and Customer Engagement Strategies for 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    profilePic: '../assets/volunteer1.png',
    userName: "Aman Gandhi"
  }

  ngOnInit() {
    this.mission = {} as MissionModel;
    this.timeLine = {} as TimeLineModel;
    this.missionCard = {} as MissionCardModel;


    if (this.IsMissionCard) {
      this.missionDetail();
    }
    if (!this.IsMissionCard) {
      this.storyDetail();
    }
  }

  // MissionData Fetch
  missionDetail() {
    this.missionCard.cityName = this.CardDataObj.cityName;
    this.missionCard.themeName = this.CardDataObj.themeName;
    this.missionCard.avgRating = Math.floor(this.CardDataObj.avgRating);
    this.missionCard.missionImagePath = '../assets/Images/CSR-initiative-stands-for-Coffee--and-Farmer-Equity-2.png'//this.CardDataObj.missionImagePath;
    this.missionCard.isAppliedMission = this.CardDataObj.isAppliedMission;
    this.missionCard.isApproveMission = this.CardDataObj.isApproveMission;
    this.missionCard.isFavMission = this.CardDataObj.isfavMission;
    this.timeLine.startDate = new Date(this.CardDataObj.mission.startDate).toLocaleDateString();
    this.timeLine.endDate = new Date(this.CardDataObj.mission.endDate).toLocaleDateString();
    this.mission.title = this.CardDataObj.mission.title;
    this.mission.shortDescription = this.CardDataObj.mission.shortDescription;
    this.mission.organizationName = this.CardDataObj.mission.organizationName;
    this.missionCard.isClosed = false;

    if (this.CardDataObj.mission.missionType == "TIME") {
      this.timeLine.isTimeBase = true;
      this.timeLine.seatLeft = this.CardDataObj.seatleft;
      this.timeLine.deadLine = new Date(this.CardDataObj.mission.deadline).toLocaleDateString();

      if(new Date(this.CardDataObj.mission.deadline) <= new Date() || this.CardDataObj.seatleft < 1 || this.CardDataObj.mission.endDate >= new Date()){
        this.missionCard.isClosed = true;
      }
    }
    else {
      this.timeLine.isTimeBase = false;
      this.timeLine.alreadyVolunteer = this.CardDataObj.alreadyVolunteer;
      this.timeLine.targetGoalValue = this.CardDataObj.targetGoalValue;
      this.timeLine.achieveGoalValue = this.CardDataObj.achieveGoalValue;

      if(new Date(this.CardDataObj.mission.endDate) <= new Date() || this.CardDataObj.targetGoalValue <= this.CardDataObj.achieveGoalValue){
        this.missionCard.isClosed = true;
      }
    }

    if(this.missionCard.isClosed){
      this.missionCard.buttonType = 'Closed';
    }
    else{
      if(this.CardDataObj.isAppliedMission && this.CardDataObj.isApproveMission){
        this.missionCard.buttonType = 'View Detail';
      }
      if(this.CardDataObj.isAppliedMission && !this.CardDataObj.isApproveMission){
        this.missionCard.buttonType = 'Pending';
      }
      if(!this.CardDataObj.isAppliedMission && !this.CardDataObj.isApproveMission){
        this.missionCard.buttonType = 'Apply';
      }
    }
  }

  // Story data fetch
  storyDetail() {
    imgUrl: '../assets/Images/Education-Supplies-for-Every--Pair-of-Shoes-Sold-1.png';
    title: "10 User and Customer Engagement Strategies for 2023";
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    profilePic: '../assets/volunteer1.png';
    userName: "Aman Gandhi";
  }

  //FavMission
  FavMissionChange(){
    this.missionCard.isFavMission = !this.missionCard.isFavMission;
  }

}
