import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelRoutingModule } from './admin-routing.module';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { UserComponent } from './containers/user/user.component';
import { MissionComponent } from './containers/mission/mission.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { FormsModule } from '@angular/forms';
import { SharedMaterialModule } from 'src/shared/modules/material.module';
import { UserAddEditComponent } from './containers/user-add-edit/user-add-edit.component';
import { ConfirmBoxComponent } from './components/confirm-box/confirm-box.component';

@NgModule({
  declarations: [
    SideNavigationComponent,
    UserComponent,
    MissionComponent,
    TopNavigationComponent,
    UserAddEditComponent,
    ConfirmBoxComponent,
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    AdminPanelRoutingModule,
    FormsModule,
  ],
  entryComponents: [ConfirmBoxComponent],
})
export class AdminPanelModule {}
