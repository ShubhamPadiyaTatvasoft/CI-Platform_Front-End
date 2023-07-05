import { Component, Input } from '@angular/core';
import { VolunteerMissionCardModel } from 'src/app/interfaces/volunteer-mission';

@Component({
  selector: 'app-mission-skill-rating',
  templateUrl: './mission-skill-rating.component.html',
  styleUrls: ['./mission-skill-rating.component.scss'],
})
export class MissionSkillRatingComponent {
  @Input() MissionData: VolunteerMissionCardModel;
  @Input() userId: number;

  counter(i: number) {
    return new Array(i);
  }
}
