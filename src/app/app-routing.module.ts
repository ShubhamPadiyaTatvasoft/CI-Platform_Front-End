import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './modules/auth/containers/login-form/login-form.component';
import { RegisterFormComponent } from './modules/auth/containers/register-form/register-form.component';
import { ForgetPasswordFormComponent } from './modules/auth/containers/forget-password-form/forget-password-form.component';
import { ResetPasswordComponent } from './modules/auth/containers/reset-password/reset-password.component';
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
  { path: 'UserDetails', loadChildren: () => import('./modules/user-details/user-details.module').then(m => m.UserDetailsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
