import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission-avg-rating',
  templateUrl: './mission-avg-rating.component.html',
  styleUrls: ['./mission-avg-rating.component.scss']
})
export class MissionAvgRatingComponent implements OnInit {
  @Input() rating !: number;
  public stars: boolean[] = [];

  constructor(){}

  ngOnInit(){
    this.AvgRatingFill();
  }

  AvgRatingFill(){
    this.stars = Array(5).fill(false).map((_, index) => index < Math.floor(this.rating));
  }
}
