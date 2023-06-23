import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ContactUsDialogComponent } from '../contact-us-dialog/contact-us-dialog.component';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() userId: number;
  @Input() userName: string;
  @Input() userEmail: string;
  constructor(public dialog: MatDialog) {
  }
  openDialog() {
    this.dialog.open(ContactUsDialogComponent, { data: { name: this.userName, email: this.userEmail, userId: this.userId } });
  }
}
