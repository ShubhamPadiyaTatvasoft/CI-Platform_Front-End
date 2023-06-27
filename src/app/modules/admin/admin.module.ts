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
import { MissionAddEditComponent } from './containers/mission-add-edit/mission-add-edit.component';
import { SkiilsComponent } from './containers/skiils/skiils.component';
import { SkiilsAddEditComponent } from './containers/skiils-add-edit/skiils-add-edit.component';
import { ThemesComponent } from './containers/themes/themes.component';
import { ThemesAddEditComponent } from './containers/themes-add-edit/themes-add-edit.component';
import { StoryComponent } from './containers/story/story.component';
import { MissionApplicationComponent } from './containers/mission-application/mission-application.component';
import { BannerManagementComponent } from './containers/banner-management/banner-management.component';
import { BannerManagementAddEditComponent } from './containers/banner-management-add-edit/banner-management-add-edit.component';
import { CMSPagesComponent } from './containers/cms-pages/cms-pages.component';
import { CMSPagesAddEditComponent } from './containers/cms-pages-add-edit/cms-pages-add-edit.component';

@NgModule({
  declarations: [
    SideNavigationComponent,
    UserComponent,
    MissionComponent,
    TopNavigationComponent,
    UserAddEditComponent,
    ConfirmBoxComponent,
    MissionAddEditComponent,
    SkiilsComponent,
    SkiilsAddEditComponent,
    ThemesComponent,
    ThemesAddEditComponent,
    StoryComponent,
    MissionApplicationComponent,
    BannerManagementComponent,
    BannerManagementAddEditComponent,
    CMSPagesComponent,
    CMSPagesAddEditComponent,
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
