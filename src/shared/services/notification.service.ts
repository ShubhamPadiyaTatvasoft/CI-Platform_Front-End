import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private toaster: ToastrService) {}

  showSuccess(message: string) {
    this.toaster.success(message);
  }

  showError(message: string) {
    this.toaster.error(message);
  }

  showInfo(message: string) {
    this.toaster.info(message);
  }

  showWarning(message: string) {
    this.toaster.warning(message);
  }
}
