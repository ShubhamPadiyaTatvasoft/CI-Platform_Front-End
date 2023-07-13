import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-story-cards',
  templateUrl: './story-cards.component.html',
  styleUrls: ['./story-cards.component.scss'],
})
export class StoryCardsComponent implements OnInit {
  storyDataObj: any;
  public isGridView = true;
  public isMissionCard = false;
  constructor(private storyService: StoryService) { }

  ngOnInit() { this.storyPageData() }
  storyPageData() {

    this.storyService.getStoryCardData().subscribe((res: any) => {
      this.storyDataObj = res.data;
      console.log(res);
    },
      (e: any) => {
        console.log(e);
      });
  }
}