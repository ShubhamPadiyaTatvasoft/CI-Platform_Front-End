import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoriesRoutingModule } from './stories-routing.module';
import { StoryListingComponent } from './containers/story-listing/story-listing.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopImageComponent } from './components/top-image/top-image.component';
import { StoryCardsComponent } from './components/story-cards/story-cards.component';
import { ShareStoryComponent } from './containers/share-story/share-story.component';
import { StoryDetailComponent } from './containers/story-detail/story-detail.component';


@NgModule({
  declarations: [
    StoryListingComponent,
    HeaderComponent,
    FooterComponent,
    TopImageComponent,
    StoryCardsComponent,
    ShareStoryComponent,
    StoryDetailComponent
  ],
  imports: [
    CommonModule,
    StoriesRoutingModule
  ]
})
export class StoriesModule { }
