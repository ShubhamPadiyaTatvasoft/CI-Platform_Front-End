import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorMessages } from 'src/app/common/errorMsg.static';
import { ValidatorsPattern } from 'src/app/common/validator.static';
import { FormValidationService } from 'src/app/modules/auth/services/form-validation.service';
import { LoginServiceService } from 'src/app/modules/auth/services/login-service.service';
import { NotificationService } from 'src/app/modules/auth/services/notification.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  email: string = '';
  tokenForPasswordReset: string = '';
  resetPasswordForm: FormGroup;
  isPasswordBlur: boolean = false;
  isPasswordMatch: boolean = false;
  showLoader: boolean = false;
  errorMessage = ErrorMessages;
  iconName: string = 'visibility_off';
  iconNameForConfirmPassword: string = 'visibility_off';
  EYE_ICON: string = 'visibility_off';
  RED_EYE: string = 'remove_red_eye';
  typeOfPassword: string = 'password';
  typeOfConfirmPassword: string = 'password';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private loginService: LoginServiceService,
    private notifyService: NotificationService,
    public formValidationService: FormValidationService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.email = params['email'];
      this.tokenForPasswordReset = params['token'];
    });

    this.createForm();
  }

  //function for create a form while initializing reset password page
  createForm() {
    this.resetPasswordForm = this.fb.group({
      password: [
        '',
        [Validators.required, Validators.pattern(ValidatorsPattern.password)],
      ],
      confirmPassword: ['', [Validators.required]],
    });
  }

  //method calls when user press change password button
  onReset() {
    if (this.resetPasswordForm.valid && !this.isPasswordMatch) {
      this.showLoader = true;
      this.loginService
        .resetPassword(
          this.email,
          this.tokenForPasswordReset,
          this.resetPasswordForm.value['password']
        )
        .subscribe({
          next: (res) => {
            this.showLoader = false;

            if (res.statusCode === 200) {
              this.router.navigate(['/']);

              this.notifyService.showSuccess(res.message);
            } else {
              this.notifyService.showError(res.message);
            }
          },
          error: (err) => {
            this.showLoader = false;

            this.notifyService.showError(err.message);
          },
        });
    }
  }

  //function for hide show New password and Confirm Password

  hideShowPassword(event: any) {
    if (event.name === 'password') {
      if (event.type === 'text') {
        this.typeOfPassword = 'password';
        this.iconName = this.EYE_ICON;
      } else {
        this.typeOfPassword = 'text';
        this.iconName = this.RED_EYE;
      }
    } else {
      if (event.type === 'text') {
        this.typeOfConfirmPassword = 'password';
        this.iconNameForConfirmPassword = this.EYE_ICON;
      } else {
        this.typeOfConfirmPassword = 'text';
        this.iconNameForConfirmPassword = this.RED_EYE;
      }
    }
  }

  // method for check if confirm password and new password is matched or not
  checkPassword() {
    var Password = this.resetPasswordForm.value.password;
    var ConfirmPassword = this.resetPasswordForm.value.confirmPassword;

    if (Password != ConfirmPassword) {
      this.isPasswordMatch = true;
    } else {
      this.isPasswordMatch = false;
    }
  }

  // method for check if password field is blurred or not according to this margin is given to confirm password field
  validatePassword() {
    this.isPasswordBlur = true;
  }
}
