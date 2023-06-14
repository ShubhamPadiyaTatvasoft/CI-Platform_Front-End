import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolunteerMissionRoutingModule } from './volunteer-mission-routing.module';
import { VolunteerMissionComponent } from './volunteer-mission.component';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
import { MissionDetailsComponent } from './components/mission-details/mission-details.component';
import { MissionTabDataComponent } from './components/mission-tab-data/mission-tab-data.component';
import { MissionSkillDaysRatingComponent } from './components/mission-skill-days-rating/mission-skill-days-rating.component';
import { MissionRecentVolunteerComponent } from './components/mission-recent-volunteer/mission-recent-volunteer.component';
import { RelatedMissionCardComponent } from './components/related-mission-card/related-mission-card.component';


@NgModule({
  declarations: [
    VolunteerMissionComponent,
    ImageCarouselComponent,
    MissionDetailsComponent,
    MissionTabDataComponent,
    MissionSkillDaysRatingComponent,
    MissionRecentVolunteerComponent,
    RelatedMissionCardComponent
  ],
  imports: [
    CommonModule,
    VolunteerMissionRoutingModule
  ]
})
export class VolunteerMissionModule { }
