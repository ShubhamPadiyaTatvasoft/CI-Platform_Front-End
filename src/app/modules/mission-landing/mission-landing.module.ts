import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MissionLandingRoutingModule } from './mission-landing-routing.module';
import { MissionComponent } from './containers/mission/mission.component';
import { CardsComponent } from './components/cards/cards.component';
import { IconsComponent } from './components/icons/icons.component';
import { ImagesComponent } from './components/images/images.component';
import { LocationComponent } from './components/location/location.component';
import { AvgRatingComponent } from './components/avg-rating/avg-rating.component';
import { ThemeComponent } from './components/theme/theme.component';
import { TimeAndGoalDetailComponent } from './components/time-and-goal-detail/time-and-goal-detail.component';
import { UniversalButtonComponent } from './components/universal-button/universal-button.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { PaginationComponent } from './components/pagination/pagination.component';


@NgModule({
  declarations: [
    MissionComponent,
    CardsComponent,
    IconsComponent,
    ImagesComponent,
    LocationComponent,
    AvgRatingComponent,
    ThemeComponent,
    TimeAndGoalDetailComponent,
    UniversalButtonComponent,
    HeaderComponent,
    SearchFilterComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    MissionLandingRoutingModule
  ]
})
export class MissionLandingModule { }
