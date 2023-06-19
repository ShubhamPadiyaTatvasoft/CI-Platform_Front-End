import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionDetailComponent } from './container/mission-detail/mission-detail.component';
import { LoginAuthGuard } from 'src/app/guards/login-auth.guard';

const routes: Routes = [{ path: '', component: MissionDetailComponent
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionVolunteerRoutingModule { }
