import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ErrorMessages } from 'src/app/common/errorMsg.static';
import { FormValidationService } from 'src/shared/services/form-validation.service';
@Component({
  selector: 'app-contact-us-dialog',
  templateUrl: './contact-us-dialog.component.html',
  styleUrls: ['./contact-us-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactUsDialogComponent implements OnInit {

  contactForm: FormGroup;
  userName: string;
  userEmail: string;
  errorMessage = ErrorMessages;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    public formValidator: FormValidationService,
    private dialogRef: MatDialogRef<ContactUsDialogComponent>
  ) {

  }

  ngOnInit(): void {
    this.userName = this.data.name;
    this.userEmail = this.data.email;
    this.createContactForm();
  }

  createContactForm() {
    this.contactForm = this.formBuilder.group({
      name: [this.userName, [Validators.required]],
      email: [this.userEmail, [Validators.required]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  save() {
    this.dialogRef.close()
  }
}
