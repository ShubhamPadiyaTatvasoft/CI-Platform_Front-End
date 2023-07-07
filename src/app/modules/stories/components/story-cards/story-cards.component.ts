import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-cards',
  templateUrl: './story-cards.component.html',
  styleUrls: ['./story-cards.component.scss'],
})
export class StoryCardsComponent implements OnInit {
  public isGridView = true;
  public isMissionCard = false;

  constructor() {}

  ngOnInit() {}
}
