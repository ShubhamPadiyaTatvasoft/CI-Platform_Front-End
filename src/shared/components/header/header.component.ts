import { Component, ViewEncapsulation } from '@angular/core';
import { LoginServiceService } from 'src/app/modules/auth/services/login-service.service';
import { SharedModule } from 'src/shared/shared.module';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  constructor(private service: LoginServiceService) {}
  logout() {
    this.service.signOut();
  }
}
