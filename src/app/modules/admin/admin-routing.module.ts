import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './containers/user/user.component';
import { MissionComponent } from './containers/mission/mission.component';
import { LoginAuthGuard } from 'src/app/guards/login-auth.guard';
import { UserAddEditComponent } from './containers/user-add-edit/user-add-edit.component';
import { MissionAddEditComponent } from './containers/mission-add-edit/mission-add-edit.component';
import { CMSPagesComponent } from './containers/cms-pages/cms-pages.component';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPanelRoutingModule {}
