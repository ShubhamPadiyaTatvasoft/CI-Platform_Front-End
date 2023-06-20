import { NgModule } from '@angular/core';
import { MissionLandingRoutingModule } from './mission-landing-routing.module';
import { MissionComponent } from './containers/mission/mission.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { PaginationComponent } from './components/pagination/pagination.component';


@NgModule({
  declarations: [
    MissionComponent,
    HeaderComponent,
    SearchFilterComponent,
    PaginationComponent
  ],
  imports: [
    MissionLandingRoutingModule
  ]
})
export class MissionLandingModule { }
