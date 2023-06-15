import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorMessages } from 'src/app/common/errorMsg.static';
import { ValidatorsPattern } from 'src/app/common/validator.static';
import { FormValidationService } from 'src/app/modules/auth/services/form-validation.service';
import { LoginServiceService } from 'src/app/modules/auth/services/login-service.service';
import { NotificationService } from 'src/app/modules/auth/services/notification.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  isPasswordBlur: boolean = false;
  showLoader: boolean = false;
  errorMessage = ErrorMessages;
  type: string = 'password';
  RED_EYE = 'remove_red_eye';
  EYE_ICON = 'visibility_off';

  iconName: string = this.EYE_ICON;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private login: LoginServiceService,
    private notifyService: NotificationService,
    public formValidationService: FormValidationService
  ) {}

  ngOnInit(): void {
    if (this.login.getToken()) {
      this.router.navigate(['/AdminPanel/user']);
    }
    this.createForm();
  }

  //function for create a form while initializing login page
  createForm() {
    this.loginForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.pattern(ValidatorsPattern.email)],
      ],

      password: [
        '',
        [Validators.required, Validators.pattern(ValidatorsPattern.password)],
      ],
    });
  }

  // method calls when user press login button
  onLogin() {
    if (this.loginForm.valid) {
      this.showLoader = true;
      this.login.login(this.loginForm.value).subscribe({
        next: (res) => {
          this.showLoader = false;
          if (res.statusCode === 200) {
            this.login.storeToken(res.data);
            this.router.navigate(['/AdminPanel/user']);
            this.notifyService.showSuccess(res.message);
            // setTimeout(() => {
            //   this.login.signOut();
            // }, 5000);
          } else {
            this.notifyService.showError(res.message);
          }
        },
        error: (err) => {
          this.showLoader = false;
          this.notifyService.showError(err.message);
        },
      });
    } else {
      this.notifyService.showError(
        this.errorMessage.FormErrorMessage.InvalidForm
      );
    }
  }

  deleteToken() {}
  //function for hide show password
  hideShowPassword(event: any) {
    if (event.type === 'text') {
      this.type = 'password';
      this.iconName = this.EYE_ICON;
    } else {
      this.type = 'text';
      this.iconName = this.RED_EYE;
    }
  }

  // method for check if password field is blurred or not according to this margin is given to confirm password field
  validatePassword() {
    this.isPasswordBlur = true;
  }
}
