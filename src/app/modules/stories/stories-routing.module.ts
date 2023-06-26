import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryListingComponent } from './containers/story-listing/story-listing.component';
import { ShareStoryComponent } from './containers/share-story/share-story.component';

const routes: Routes = [
  {
    path : '',
    component : StoryListingComponent
  },

  {
    path : 'share-story',
    component : ShareStoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoriesRoutingModule { }
