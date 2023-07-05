import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { LoginServiceService } from 'src/app/modules/auth/services/login-service.service';
import { Router } from '@angular/router';
import { ConfirmBoxService } from '../../services/confirm-box.service';
import { NotificationService } from 'src/shared/services/notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ErrorMessages } from 'src/app/common/errorMsg.static';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss'],
})
export class ThemesComponent implements OnInit {
  timer: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  data: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumn: string[] = ['themeTitle', 'status', 'action'];
  showNoDataFound: string;
  constructor(
    private adminService: AdminService,
    private loginService: LoginServiceService,
    private router: Router,
    private dialogService: ConfirmBoxService,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.getThemeData('');
  }

  //event called when user start searching
  keyupSearch(search: any) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.getThemeData(search.value);
    }, 1000);
  }

  // function for get all themes data
  getThemeData(search: string) {
    this.adminService.getAllThemes(search).subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        if (res.data.length == 0) {
          this.showNoDataFound = 'No data found';
        } else {
          this.showNoDataFound = '';
        }
      },
      error: (err) => {
        this.notifyService.showError(ErrorMessages.ApiErrorMessage.ApiFailed);
        this.showNoDataFound = 'No data found';
      },
    });
  }

  // function for edit delete theme
  getThemeDataForEditDelete(event: any, action: string) {
    if (action == 'edit') {
      this.router.navigate(['AdminPanel/themeForm', action, event.id]);
    } else {
      this.dialogService
        .openConfirmDialogue('Are you sure want to delete!!?')
        .afterClosed()
        .subscribe((res) => {
          if (res == true) {
            this.deleteTheme(event.id);
          }
        });
    }
  }

  //function for delete theme
  deleteTheme(themeId: number) {
    this.adminService.deleteTheme(themeId).subscribe({
      next: (res) => {
        if (res.statusCode == 200) {
          this.notifyService.showSuccess(res.message);
        } else {
          this.notifyService.showWarning(res.message);
        }
        this.getThemeData('');
      },
      error: () => {
        this.notifyService.showError(ErrorMessages.ApiErrorMessage.ApiFailed);
        this.showNoDataFound = 'No data found';
      },
    });
  }
}
