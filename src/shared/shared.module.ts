import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsDialogComponent } from './components/contact-us-dialog/contact-us-dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
@NgModule({

    exports: [
        FooterComponent, ContactUsDialogComponent
    ],
    declarations: [FooterComponent, ContactUsDialogComponent, HeaderComponent, SubHeaderComponent]
})
export class SharedModule { }