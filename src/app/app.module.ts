import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from './modules/auth/containers/login-form/login-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegisterFormComponent } from './modules/auth/containers/register-form/register-form.component';
import { ForgetPasswordFormComponent } from './modules/auth/containers/forget-password-form/forget-password-form.component';
import { BannerComponent } from './modules/auth/components/banner/banner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { TokenInterceptorInterceptor } from './interceptors/token-interceptor.interceptor';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatTableModule } from '@angular/material/table';
import { ResetPasswordComponent } from './modules/auth/containers/reset-password/reset-password.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MissionRelatedMissionComponent } from './mission-related-mission/mission-related-mission.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ForgetPasswordFormComponent,
    BannerComponent,
    ResetPasswordComponent,
    MissionRelatedMissionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    MatTableModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    MatCheckboxModule,
    MatMenuModule,
    MatPaginatorModule,
  ],

  //provide interceptors using provider
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
