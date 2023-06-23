import { Component, Inject, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorMessages } from 'src/app/common/errorMsg.static';
import { ValidatorsPattern } from 'src/app/common/validator.static';
import { ChangePassword } from 'src/app/interfaces/change-password';
import { FormValidationService } from 'src/shared/services/form-validation.service';
import { UserDetailsService } from '../../services/user-details.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/shared/services/notification.service';

@Component({
  selector: 'app-password-dialog',
  templateUrl: './password-dialog.component.html',
  styleUrls: ['./password-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PasswordDialogComponent implements OnInit {
  isBlur: boolean = false;
  isPasswordMatch: boolean = false;
  changePasswordForm: FormGroup;
  errorMessage = ErrorMessages;
  changePass: ChangePassword;
  constructor(private formBuilder: FormBuilder,
    public formValidator: FormValidationService,
    private userProfileService: UserDetailsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public notify: NotificationService) {

  }

  ngOnInit(): void {
    this.createPasswordForm();
  }

  createPasswordForm() {
    this.changePasswordForm = this.formBuilder.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.pattern(ValidatorsPattern.password)]],
      confirmPassword: ['', [Validators.required]]
    })
  }

  // method for check if confirm password and new password is matched or not
  checkPassword() {
    var Password = this.changePasswordForm.value.newPassword;
    var ConfirmPassword = this.changePasswordForm.value.confirmPassword;

    if (Password != ConfirmPassword) {
      this.isPasswordMatch = false;
    } else {

      this.isPasswordMatch = true;
    }
  }

  passwordBlur() {
    this.isBlur = true;
  }

  changePassword() {
    if (this.changePasswordForm.valid) {
      this.changePass = {
        userId: this.data.userId,
        oldPassword: this.changePasswordForm.get('oldPassword')?.value,
        newPassword: this.changePasswordForm.get('newPassword')?.value,
        confirmPassword: this.changePasswordForm.get('confirmPassword')?.value,
      }
      console.log(this.changePass);

      this.userProfileService.changePassword(this.changePass).subscribe({
        next: (res) => {
          console.log(res);
          if (res.result) {
            this.notify.showSuccess(res.message);
          }
          else {
            this.notify.showError(res.message);
          }
        }
      });
    }
  }
}
