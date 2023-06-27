import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsDialogComponent } from './components/contact-us-dialog/contact-us-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedMaterialModule } from './modules/material.module';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderComponent } from './components/header/header.component';
import { MissionAvgRatingComponent } from './components/mission-avg-rating/mission-avg-rating.component';
import { CardsButtonComponent } from './components/cards-button/cards-button.component';
import { IconsComponent } from './components/icons/icons.component';
import { TimeAndGoalDetailComponent } from './components/time-and-goal-detail/time-and-goal-detail.component';
import { ProfileImageComponent } from './components/profile-image/profile-image.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MissionStoryCardComponent } from './components/mission-story-card/mission-story-card.component';


@NgModule({
  exports: [
    FooterComponent,
    ContactUsDialogComponent,
    FilterComponent,
    HeaderComponent,
    PaginationComponent,
    MissionStoryCardComponent,
    MissionAvgRatingComponent,
    CardsButtonComponent,
    IconsComponent,
    TimeAndGoalDetailComponent,
    ProfileImageComponent,
  ],

  declarations: [
    FooterComponent,
    ContactUsDialogComponent,
    PaginationComponent,
    FilterComponent,
    HeaderComponent,
    MissionStoryCardComponent,
    MissionAvgRatingComponent,
    CardsButtonComponent,
    IconsComponent,
    TimeAndGoalDetailComponent,
    ProfileImageComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatProgressBarModule,
    MatTooltipModule
  ],
})
export class SharedModule { }
