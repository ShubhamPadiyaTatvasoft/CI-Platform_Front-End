import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { UserComponent } from './components/user/user.component';
import { MissionComponent } from './components/mission/mission.component';
import { LoginAuthGuard } from 'src/app/guards/login-auth.guard';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPanelRoutingModule {}
