import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoriesRoutingModule } from './stories-routing.module';
import { StoryListingComponent } from './containers/story-listing/story-listing.component';
import { StoryHeaderComponent } from './components/header/header.component';
import { StoryFooterComponent } from './components/footer/footer.component';
import { TopImageComponent } from './components/top-image/top-image.component';
import { StoryCardsComponent } from './components/story-cards/story-cards.component';
import { ShareStoryComponent } from './containers/share-story/share-story.component';
import { StoryDetailComponent } from './containers/story-detail/story-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedMaterialModule } from 'src/shared/modules/material.module';
import { SharedModule } from 'src/shared/shared.module';
import { StoryImageCarouselComponent } from './components/story-image-carousel/story-image-carousel.component';
import { WhyVolunteerComponent } from './components/why-volunteer/why-volunteer.component';
import { StoryDescriptionComponent } from './components/story-description/story-description.component';

@NgModule({
  declarations: [
    StoryListingComponent,
    StoryHeaderComponent,
    StoryFooterComponent,
    TopImageComponent,
    StoryCardsComponent,
    ShareStoryComponent,
    StoryDetailComponent,
    StoryImageCarouselComponent,
    WhyVolunteerComponent,
    StoryDescriptionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoriesRoutingModule,
    NgxPaginationModule,
    CKEditorModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    SharedModule
  ]
})
export class StoriesModule {}
