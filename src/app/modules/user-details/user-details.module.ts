import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsRoutingModule } from './user-details-routing.module';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { FormTitleComponent } from './components/form-title/form-title.component';
import { PasswordDialogComponent } from './components/password-dialog/password-dialog.component';
import { SkillsDialogComponent } from './components/skills-dialog/skills-dialog.component';
import { SkillsListComponent } from './components/skills-list/skills-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserImageComponent } from './components/user-image/user-image.component';



@NgModule({
  declarations: [

  
    UserProfileComponent,
        FormTitleComponent,
        PasswordDialogComponent,
        SkillsDialogComponent,
        SkillsListComponent,
        UserFormComponent,
        UserImageComponent
  ],
  imports: [
    CommonModule,
    UserDetailsRoutingModule
  ]
})
export class UserDetailsModule { }
