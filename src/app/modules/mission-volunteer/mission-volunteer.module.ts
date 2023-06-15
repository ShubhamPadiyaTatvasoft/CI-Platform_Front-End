import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionVolunteerRoutingModule } from './mission-volunteer-routing.module';
import { MissionImageCarouselComponent } from './components/mission-image-carousel/mission-image-carousel.component';
import { MissionInformationComponent } from './components/mission-information/mission-information.component';
import { MissionTabLayoutComponent } from './components/mission-tab-layout/mission-tab-layout.component';
import { MissionSkillratingComponent } from './components/mission-skillrating/mission-skillrating.component';
import { MissionRecentVolunteerComponent } from './components/mission-recent-volunteer/mission-recent-volunteer.component';
import { MissionRelatedmissionComponent } from './components/mission-relatedmission/mission-relatedmission.component';
import { MissionDetailComponent } from './container/mission-detail/mission-detail.component';


@NgModule({
  declarations: [
    MissionImageCarouselComponent,
    MissionInformationComponent,
    MissionTabLayoutComponent,
    MissionSkillratingComponent,
    MissionRecentVolunteerComponent,
    MissionRelatedmissionComponent,
    MissionDetailComponent
  ],
  imports: [
    CommonModule,
    MissionVolunteerRoutingModule
  ]
})
export class MissionVolunteerModule { }
