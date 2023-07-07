import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { TimeLineModel } from 'src/app/interfaces/time-line-model';

@Component({
  selector: 'app-mission-story-card',
  templateUrl: './mission-story-card.component.html',
  styleUrls: ['./mission-story-card.component.scss']
})
export class MissionStoryCardComponent implements OnInit{
  @Input('isGridViewCheck') isGridView!: boolean;
  @Input('isMissionCardCheck') isMissionCard!: boolean;
  @Input() cardDataObj: any;
  isClosed = false;
  buttonType : string;
  timeLine : TimeLineModel;
  @Output() favMissionId = new EventEmitter<any>();
  @Output() recommendationMissionDialLog = new EventEmitter<any>();

  constructor() {}

  public story = {
    imgUrl: '../assets/Images/Education-Supplies-for-Every--Pair-of-Shoes-Sold-1.png',
    title: "10 User and Customer Engagement Strategies for 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    profilePic: './assets/Images/volunteer1.png',
    userName: "Aman Gandhi",
    theme : "Education",
  }

  ngOnInit() {
    this.timeLine = {} as TimeLineModel;

    if (this.isMissionCard) {
      this.missionDetail();
    }
    if (!this.isMissionCard) {
      this.storyDetail();
    }
  }

  // MissionData Fetch
  missionDetail() {
    if(this.cardDataObj.missionImagePath == null){
      this.cardDataObj.missionImagePath = '../assets/Images/CSR-initiative-stands-for-Coffee--and-Farmer-Equity-1.png';
    }
    this.timeLine.startDate = this.cardDataObj.mission.startDate;
    this.timeLine.endDate = this.cardDataObj.mission.endDate;

    if (this.cardDataObj.mission.missionType == "TIME") {
      this.timeLine.isTimeBase = true;
      this.timeLine.seatLeft = this.cardDataObj.seatleft;
      this.timeLine.deadLine = this.cardDataObj.mission.deadline;

      if(new Date(this.cardDataObj.mission.deadline) <= new Date() || this.cardDataObj.seatleft < 1 || new Date(this.cardDataObj.mission.endDate) <= new Date()){
        this.isClosed = true;
      }
    }
    else {
      this.timeLine.isTimeBase = false;
      this.timeLine.alreadyVolunteer = this.cardDataObj.alreadyVolunteer;
      this.timeLine.targetGoalValue = this.cardDataObj.targetGoalValue;
      this.timeLine.achieveGoalValue = this.cardDataObj.achieveGoalValue;

      if(new Date(this.cardDataObj.mission.endDate) <= new Date() || this.cardDataObj.targetGoalValue <= this.cardDataObj.achieveGoalValue){
        this.isClosed = true;
      }
    }

    if(this.isClosed){
      this.buttonType = 'Closed';
    }
    else{
      if(this.cardDataObj.isAppliedMission && this.cardDataObj.isApproveMission){
        this.buttonType = 'View Detail';
      }
      if(this.cardDataObj.isAppliedMission && !this.cardDataObj.isApproveMission){
        this.buttonType = 'Pending';
      }
      if(!this.cardDataObj.isAppliedMission && !this.cardDataObj.isApproveMission){
        this.buttonType = 'Apply';
      }
    }
  }

  // Story data fetch
  storyDetail() {}

  //FavMission
  favMissionChange(missionId: number){
    this.favMissionId.emit(missionId);
  }

  //Recommended
  recommendedDialog(missionId : number){
    this.recommendationMissionDialLog.emit(missionId);
  }
}
