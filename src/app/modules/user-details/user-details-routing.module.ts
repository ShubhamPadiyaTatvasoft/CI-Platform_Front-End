import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { LoginAuthGuard } from 'src/app/guards/login-auth.guard';

const routes: Routes = [
  { path: '', component: UserProfileComponent, canActivate: [LoginAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDetailsRoutingModule {}
