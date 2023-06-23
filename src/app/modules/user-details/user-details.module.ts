import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsRoutingModule } from './user-details-routing.module';
import { FormTitleComponent } from './components/form-title/form-title.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { PasswordDialogComponent } from './components/password-dialog/password-dialog.component';
import { SkillsDialogComponent } from './components/skills-dialog/skills-dialog.component';
import { SkillsListComponent } from './components/skills-list/skills-list.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/shared/shared.module';
import { SharedMaterialModule } from 'src/shared/modules/material.module';


@NgModule({
  declarations: [
    FormTitleComponent,
    UserProfileComponent,
    PasswordDialogComponent,
    SkillsDialogComponent,
    SkillsListComponent,

  ],
  imports: [
    CommonModule,
    UserDetailsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    SharedMaterialModule
  ],

  exports: [

  ],

})
export class UserDetailsModule { }
