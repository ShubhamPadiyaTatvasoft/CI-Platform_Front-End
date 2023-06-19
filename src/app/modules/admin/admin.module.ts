import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelRoutingModule } from './admin-routing.module';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { UserComponent } from './containers/user/user.component';
import { MissionComponent } from './containers/mission/mission.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { FormsModule } from '@angular/forms';
import { SharedMaterialModule } from 'src/shared/modules/material.module';

@NgModule({
  declarations: [
    SideNavigationComponent,
    UserComponent,
    MissionComponent,
    TopNavigationComponent,
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    AdminPanelRoutingModule,
    FormsModule,
  ],
})
export class AdminPanelModule {}
