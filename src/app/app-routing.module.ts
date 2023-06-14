import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ForgetPasswordFormComponent } from './components/forget-password-form/forget-password-form.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { PaginationComponent } from './common/components/pagination/pagination.component';
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
    path: 'pagination',
    component: PaginationComponent,
  },
  {
    path: 'user',
    loadChildren: () => import('../app/user-details/user-details.module').then(m => m.UserDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
