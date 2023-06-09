import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorMessages } from 'src/app/common/errorMsg.static';
import { ValidatorsPattern } from 'src/app/common/validator.static';
import { FormValidationService } from 'src/shared/services/form-validation.service';
import { LoginServiceService } from 'src/app/modules/auth/services/login-service.service';
import { NotificationService } from 'src/shared/services/notification.service';

@Component({
  selector: 'app-forget-password-form',
  templateUrl: './forget-password-form.component.html',
  styleUrls: ['./forget-password-form.component.scss'],
})
export class ForgetPasswordFormComponent implements OnInit {
  forgetPassForm: FormGroup;
  email: string = '';
  buttonDisabled: boolean = false;
  showLoader: boolean = false;
  errorMessage = ErrorMessages;

  ngOnInit(): void {
    this.createForm();
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginServiceService,
    private notifyService: NotificationService,
    public formValidationService: FormValidationService
  ) {}

  //function for create a form while initializing forgetPassword page
  createForm() {
    this.forgetPassForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.pattern(ValidatorsPattern.email)],
      ],
    });
  }

  // method calls when user press forgetPassword button
  forgetPass() {
    if (this.forgetPassForm.valid) {
      this.buttonDisabled = true;
      this.showLoader = true;
      this.email = this.forgetPassForm.value['email'];
      this.loginService.forgetPassword(this.email).subscribe({
        next: (res) => {
          this.showLoader = false;
          if (res.statusCode == 200) {
            this.notifyService.showSuccess(res.message);
          } else {
            this.notifyService.showError(res.message);
          }
          this.buttonDisabled = false;
        },
        error: (err) => {
          this.showLoader = false;
          this.buttonDisabled = false;
          this.notifyService.showError(err.message);
        },
      });
    } else {
      this.notifyService.showError(
        this.errorMessage.FormErrorMessage.InvalidForm
      );
    }
  }
}
