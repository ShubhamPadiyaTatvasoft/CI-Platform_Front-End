import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ErrorMessages } from 'src/app/common/errorMsg.static';
import { FormValidationService } from 'src/shared/services/form-validation.service';
import { ContactUs } from 'src/app/interfaces/contact-us';
import { UserDetailsService } from 'src/app/modules/user-details/services/user-details.service';
import { NotificationService } from 'src/shared/services/notification.service';
import { FooterService } from 'src/shared/services/footer.service';
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
  contact: ContactUs;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    public formValidator: FormValidationService,
    private dialogRef: MatDialogRef<ContactUsDialogComponent>,
    private footerService: FooterService,
    private notify: NotificationService
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
    this.contact = {
      email: this.contactForm.get("email")?.value,
      userName: this.contactForm.get("name")?.value,
      subject: this.contactForm.get("subject")?.value,
      message: this.contactForm.get("message")?.value,
      userId: this.data.userId,
    }
    this.footerService.contactUs(this.contact).subscribe({
      next: (res) => {
        if (res.result) {
          this.notify.showSuccess(res.message);
        }
        else {
          this.notify.showError(res.message);
        }
      }
    });
    this.dialogRef.close()
  }
}
