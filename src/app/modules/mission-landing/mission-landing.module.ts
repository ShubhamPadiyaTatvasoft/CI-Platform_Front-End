import { NgModule } from '@angular/core';
import { MissionLandingRoutingModule } from './mission-landing-routing.module';
import { MissionComponent } from './containers/mission/mission.component';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [MissionComponent],
  imports: [MissionLandingRoutingModule, SharedModule],
})
export class MissionLandingModule {}
