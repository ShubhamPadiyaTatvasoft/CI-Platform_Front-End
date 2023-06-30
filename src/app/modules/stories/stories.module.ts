import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoriesRoutingModule } from './stories-routing.module';
import { StoryListingComponent } from './containers/story-listing/story-listing.component';
import { HeaderComponent2 } from './components/header/header.component';
import { FooterComponent2 } from './components/footer/footer.component';
import { TopImageComponent } from './components/top-image/top-image.component';
import { StoryCardsComponent } from './components/story-cards/story-cards.component';
import { ShareStoryComponent } from './containers/share-story/share-story.component';
import { StoryDetailComponent } from './containers/story-detail/story-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedMaterialModule } from 'src/shared/modules/material.module';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [
    StoryListingComponent,
    FooterComponent2,
    TopImageComponent,
    StoryCardsComponent,
    ShareStoryComponent,
    StoryDetailComponent,
    HeaderComponent2
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
