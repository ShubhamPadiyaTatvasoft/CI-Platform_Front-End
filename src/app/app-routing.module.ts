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
  { path: 'UserDetails/:userId', loadChildren: () => import('./modules/user-details/user-details.module').then(m => m.UserDetailsModule) },
  {
    path: 'MissionVolunteer',
    loadChildren: () =>
      import('./modules/mission-volunteer/mission-volunteer.module').then(
        (m) => m.MissionVolunteerModule
      ),
  },

  {
    path: 'StoryListing',
    loadChildren: () =>
      import('./modules/stories/stories.module').then(
        (m) => m.StoriesModule
      ),
  },
  {
    path: 'Mission',
    loadChildren: () =>
      import('./modules/mission-landing/mission-landing.module').then(
        (m) => m.MissionLandingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
