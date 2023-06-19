import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionVolunteerRoutingModule } from './mission-volunteer-routing.module';
import { MissionImageCarouselComponent } from './components/mission-image-carousel/mission-image-carousel.component';
import { MissionInformationComponent } from './components/mission-information/mission-information.component';
import { MissionTabLayoutComponent } from './components/mission-tab-layout/mission-tab-layout.component';
import { MissionRecentVolunteerComponent } from './components/mission-recent-volunteer/mission-recent-volunteer.component';
import { MissionDetailComponent } from './container/mission-detail/mission-detail.component';
import { MissionRelatedMissionComponent } from './components/mission-related-mission/mission-related-mission.component';
import { MissionSkillRatingComponent } from './components/mission-skill-rating/mission-skill-rating.component';


@NgModule({
  declarations: [
    MissionImageCarouselComponent,
    MissionInformationComponent,
    MissionTabLayoutComponent,
    MissionRecentVolunteerComponent,
    MissionDetailComponent,
    MissionRelatedMissionComponent,
    MissionSkillRatingComponent
  ],
  imports: [
    CommonModule,
    MissionVolunteerRoutingModule
  ]
})
export class MissionVolunteerModule { }
