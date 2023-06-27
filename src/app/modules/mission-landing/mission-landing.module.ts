import { NgModule } from '@angular/core';
import { MissionLandingRoutingModule } from './mission-landing-routing.module';
import { MissionComponent } from './containers/mission/mission.component';
import { SharedModule } from 'src/shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MissionComponent],
  imports: [
    MissionLandingRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule,
  ],
})
export class MissionLandingModule {}
