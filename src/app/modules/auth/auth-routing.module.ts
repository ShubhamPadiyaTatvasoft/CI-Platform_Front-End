import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from './containers/login-form/login-form.component';
import { RegisterFormComponent } from './containers/register-form/register-form.component';
import { ForgetPasswordFormComponent } from './containers/forget-password-form/forget-password-form.component';
import { ResetPasswordComponent } from './containers/reset-password/reset-password.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
