import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'AdminPanel',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminPanelModule),
  },

  {
    path: '',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'MissionVolunteer',
    loadChildren: () =>
      import('./modules/mission-volunteer/mission-volunteer.module').then(
        (m) => m.MissionVolunteerModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
