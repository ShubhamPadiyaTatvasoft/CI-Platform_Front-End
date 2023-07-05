import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './containers/user/user.component';
import { MissionComponent } from './containers/mission/mission.component';
import { LoginAuthGuard } from 'src/app/guards/login-auth.guard';
import { UserAddEditComponent } from './containers/user-add-edit/user-add-edit.component';
import { MissionAddEditComponent } from './containers/mission-add-edit/mission-add-edit.component';
import { CMSPagesComponent } from './containers/cms-pages/cms-pages.component';
import { MissionApplicationComponent } from './containers/mission-application/mission-application.component';
import { StoriesModule } from '../stories/stories.module';
import { StoryComponent } from './containers/story/story.component';
import { SkiilsComponent } from './containers/skiils/skiils.component';
import { BannerManagementComponent } from './containers/banner-management/banner-management.component';
import { ThemesComponent } from './containers/themes/themes.component';
import { CMSPagesAddEditComponent } from './containers/cms-pages-add-edit/cms-pages-add-edit.component';
import { BannerComponent } from '../auth/components/banner/banner.component';
import { BannerManagementAddEditComponent } from './containers/banner-management-add-edit/banner-management-add-edit.component';
import { ThemesAddEditComponent } from './containers/themes-add-edit/themes-add-edit.component';
// import { UserCRUDComponent } from './containers/user-crud/user-crud.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    canActivate: [LoginAuthGuard],
  },
  {
    path: 'Mission',
    component: MissionComponent,
    canActivate: [LoginAuthGuard],
  },
  {
    path: 'CMSPage',
    component: CMSPagesComponent,
  },
  {
    path: 'MissionApplication',
    component: MissionApplicationComponent,
  },
  {
    path: 'MissionTheme',
    component: ThemesComponent,
  },
  {
    path: 'Story',
    component: StoryComponent,
  },
  {
    path: 'MissionSkills',
    component: SkiilsComponent,
  },
  {
    path: 'BannerManagement',
    component: BannerManagementComponent,
  },
  {
    path: 'bannerForm/:action',
    component: BannerManagementAddEditComponent,
    canActivate: [LoginAuthGuard],
  },
  {
    path: 'bannerForm/:action/:id',
    component: BannerManagementAddEditComponent,
    canActivate: [LoginAuthGuard],
  },
  {
    path: 'themeForm/:action/:id',
    component: ThemesAddEditComponent,
    canActivate: [LoginAuthGuard],
  },
  {
    path: 'themeForm/:action',
    component: ThemesAddEditComponent,
    canActivate: [LoginAuthGuard],
  },
  {
    path: 'userForm/:action/:id',
    component: UserAddEditComponent,
    canActivate: [LoginAuthGuard],
  },
  {
    path: 'userForm/:action',
    component: UserAddEditComponent,
    canActivate: [LoginAuthGuard],
  },
  {
    path: 'missionForm/:action/:id',
    component: MissionAddEditComponent,
    canActivate: [LoginAuthGuard],
  },
  {
    path: 'missionForm/:action',
    component: MissionAddEditComponent,
    canActivate: [LoginAuthGuard],
  },
  {
    path: 'cmsForm/:action/:id',
    component: CMSPagesAddEditComponent,
    canActivate: [LoginAuthGuard],
  },
  {
    path: 'cmsForm/:action',
    component: CMSPagesAddEditComponent,
    canActivate: [LoginAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPanelRoutingModule {}
