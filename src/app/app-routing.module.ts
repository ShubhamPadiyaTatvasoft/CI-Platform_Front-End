import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './modules/login-form/login-form.component';
import { RegisterFormComponent } from './modules/register-form/register-form.component';
import { ForgetPasswordFormComponent } from './modules/forget-password-form/forget-password-form.component';
import { ResetPasswordComponent } from './modules/reset-password/reset-password.component';
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
  {
    path: 'AdminPanel',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminPanelModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
