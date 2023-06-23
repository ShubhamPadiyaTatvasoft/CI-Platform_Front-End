import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginServiceService } from 'src/app/modules/auth/services/login-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/modules/admin/services/admin.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { ConfirmBoxService } from '../../services/confirm-box.service';
import { NotificationService } from 'src/shared/services/notification.service';
import { ErrorMessages } from 'src/app/common/errorMsg.static';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  data: any;
  timer: any;
  dataSource = new MatTableDataSource<any>();

  displayedColumn: string[] = [
    'firstName',
    'lastName',
    'employeeId',
    'department',
    'status',
    'action',
  ];
  showNoDataFound: string;

  constructor(
    private adminService: AdminService,
    private loginService: LoginServiceService,
    private router: Router,
    private dialogService: ConfirmBoxService,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.getUserData('');
  }

  //event called when user press logout
  logout() {
    this.loginService.signOut();
  }

  //event called when user start searching
  keyupSearch(search: any) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.getUserData(search.value);
    }, 1000);
  }

  //api call for getting the data of all user and set data into mat-table
  getUserData(search: any) {
    this.adminService.getAllUser(search).subscribe({
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
        this.notifyService.showError('please login again!');
        this.loginService.signOut();
      },
    });
  }

  //function for opening confirmation box for edit or delete user
  getUserDataForEditOrDelete(event: any, action: string) {
    if (action == 'edit') {
      this.router.navigate(['AdminPanel/userForm', action, event.id]);
    } else {
      this.dialogService
        .openConfirmDialogue('Are you sure want to delete!!?')
        .afterClosed()
        .subscribe((res) => {
          if (res == true) {
            this.deleteUser(event.id);
          }
        });
    }
  }

  //api call for deleting the data of user
  deleteUser(userIdForDelete: any) {
    this.adminService.DeleteUser(Number(userIdForDelete)).subscribe({
      next: (res) => {
        this.notifyService.showWarning(res.message);
        this.getUserData('');
      },
      error: (err) => {
        this.notifyService.showError(ErrorMessages.ApiErrorMessage.ApiFailed);
        this.loginService.signOut();
      },
    });
  }
}
