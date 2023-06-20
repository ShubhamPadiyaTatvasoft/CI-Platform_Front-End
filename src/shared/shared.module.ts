import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsDialogComponent } from './components/contact-us-dialog/contact-us-dialog.component';
@NgModule({

    exports: [
        FooterComponent, ContactUsDialogComponent
    ],
    declarations: [FooterComponent, ContactUsDialogComponent]
})
export class SharedModule { }