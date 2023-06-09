import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorMessages } from 'src/app/common/errorMsg.static';
import { ValidatorsPattern } from 'src/app/common/validator.static';
import { FormValidationService } from 'src/app/services/form-validation.service';
import { NotificationService } from 'src/app/services/notification.service';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  
  typeOfPassword: string = 'password';
  typeOfConfirmPassword: string = 'password';
  iconName: string = 'visibility_off';
  iconNameForConfirmPassword: string = 'visibility_off';
  EYE_ICON: string = 'visibility_off';
  RED_EYE: string = 'remove_red_eye';
  RegisterForm: FormGroup;
  isPasswordBlur: boolean = false;
  isPasswordMatch: boolean = false;
  errorMessage = ErrorMessages;

  constructor(
    private fb: FormBuilder,
    private register: RegistrationService,
    private notifyService: NotificationService,
    private router: Router,
    public formValidationService: FormValidationService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  //function for create a form while initializing registration page
  createForm() {
    this.RegisterForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phoneNumber: ['', [
        Validators.required,
        Validators.pattern(ValidatorsPattern.mobileNumber),
      ]],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern(ValidatorsPattern.email),
      ]],

      password: ['', [
        Validators.required,
        Validators.pattern(ValidatorsPattern.password),
      ]],
      confirmPassword: ['', Validators.required],
    });
  }

  //function for hide show password
  hideShowPassword(event: any) {
    if(event.name==='password'){
      if(event.type==='text'){
        this.typeOfPassword = 'password';
        this.iconName = this.EYE_ICON;
      }
      else{
        this.typeOfPassword = 'text';
        this.iconName = this.RED_EYE;
      }
    }
    else{
      if(event.type==='text'){
        this.typeOfConfirmPassword = 'password';
        this.iconNameForConfirmPassword = this.EYE_ICON;
      }
      else{
        this.typeOfConfirmPassword = 'text';
        this.iconNameForConfirmPassword = this.RED_EYE;
      }
    }
  }

  // method calls when user press register button
  onRegister() {
    if (this.RegisterForm.valid && !this.isPasswordMatch) {
      this.register.register(this.RegisterForm.value).subscribe({
        next: (res) => {
          if (res.statuscode == 200) {
            this.router.navigate(['/']);
            this.notifyService.showSuccess(res.message);
          } else {
            this.notifyService.showError( res.message);
          }
        },
        error: (err) => {
          this.notifyService.showError(err.message);
        },
      });
    } else {
      this.notifyService.showError(this.errorMessage.FormErrorMessage.InvalidForm);
    }
  }

  // method for check if password field is blurred or not according to this margin is given to confirm password field
  validatePassword() {
    this.isPasswordBlur = true;
  }

  // method for check if confirm password and password is matched or not
  checkPassword() {
    var Password = this.RegisterForm.value.password;
    var ConfirmPassword = this.RegisterForm.value.confirmPassword;

    if (Password != ConfirmPassword) {
      this.isPasswordMatch = true;
    } else {
      this.isPasswordMatch = false;
    }
  }
}
