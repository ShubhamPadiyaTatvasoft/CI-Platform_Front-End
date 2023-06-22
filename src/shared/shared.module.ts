import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsDialogComponent } from './components/contact-us-dialog/contact-us-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedMaterialModule } from './modules/material.module';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  exports: [
    FooterComponent,
    ContactUsDialogComponent,
    FilterComponent,
    HeaderComponent,
  ],

  declarations: [
    FooterComponent,
    ContactUsDialogComponent,
    PaginationComponent,
    FilterComponent,
    HeaderComponent,
  ],
  imports: [
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
  ],
})
export class SharedModule {}
