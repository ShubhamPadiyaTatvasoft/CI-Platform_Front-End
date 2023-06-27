import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-time-and-goal-detail',
  templateUrl: './time-and-goal-detail.component.html',
  styleUrls: ['./time-and-goal-detail.component.scss']
})
export class TimeAndGoalDetailComponent {
  @Input() timeAndGoalDetail!:any;
  timeLineDiv !: string;
  progressCount = "";

  constructor(){}

  ngOnInit(){}

  styleAdd(){
    this.progressCount = this.timeAndGoalDetail.achieveGoalValue / this.timeAndGoalDetail.targetGoalValue + "%";
    return {
      width : this.progressCount,
    }
  }
}
