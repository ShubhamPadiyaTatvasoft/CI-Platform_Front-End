import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ForgetPasswordFormComponent } from './components/forget-password-form/forget-password-form.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
const routes: Routes = [
  {
    path: '',
    component: LoginFormComponent,
  },
  {
    path: 'register',
    component: RegisterFormComponent,
  },
  {
    path: 'forgetPassword',
    component: ForgetPasswordFormComponent,
  },
  {
    path: 'resetPassword',
    component: ResetPasswordComponent,
  },
  { path: 'volunteer-mission', loadChildren: () => import('./components/volunteer-mission/volunteer-mission.module').then(m => m.VolunteerMissionModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
