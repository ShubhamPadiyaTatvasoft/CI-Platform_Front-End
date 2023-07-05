import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { VolunteerMissionCardModel } from 'src/app/interfaces/volunteer-mission';

@Component({
  selector: 'app-mission-image-carousel',
  templateUrl: './mission-image-carousel.component.html',
  styleUrls: ['./mission-image-carousel.component.scss'],
})
export class MissionImageCarouselComponent implements OnInit, OnChanges {
  @Input() MissionData: VolunteerMissionCardModel;
  @Input() userId: number;

  mediapath: string[];
  constructor() {}
  ngOnInit(): void {}

  ngOnChanges(): void {
    this.mediapath = this.MissionData.mediaPath.split('&');
    
  }
}
