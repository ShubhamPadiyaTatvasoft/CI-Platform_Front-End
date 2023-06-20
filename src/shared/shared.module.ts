import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsDialogComponent } from './components/contact-us-dialog/contact-us-dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterComponent } from './components/filter/filter.component';
@NgModule({
  exports: [
    FooterComponent,
    ContactUsDialogComponent,
    HeaderComponent,
    FilterComponent,
  ],
  declarations: [
    FooterComponent,
    ContactUsDialogComponent,
    HeaderComponent,
    FilterComponent,
  ],
})
export class SharedModule {}
