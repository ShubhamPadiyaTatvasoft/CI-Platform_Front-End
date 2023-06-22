import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './containers/login-form/login-form.component';
import { RegisterFormComponent } from './containers/register-form/register-form.component';
import { ForgetPasswordFormComponent } from './containers/forget-password-form/forget-password-form.component';
import { BannerComponent } from './components/banner/banner.component';
import { ResetPasswordComponent } from './containers/reset-password/reset-password.component';
import { SharedMaterialModule } from 'src/shared/modules/material.module';

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    ForgetPasswordFormComponent,
    BannerComponent,
    ResetPasswordComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, SharedMaterialModule],
})
export class AuthModule {}
