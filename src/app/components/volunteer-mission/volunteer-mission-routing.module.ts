import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolunteerMissionComponent } from './volunteer-mission.component';
import { LoginAuthGuard } from 'src/app/guards/login-auth.guard';

const routes: Routes = [{ path: 'user', component: VolunteerMissionComponent ,canActivate:[LoginAuthGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolunteerMissionRoutingModule { }
