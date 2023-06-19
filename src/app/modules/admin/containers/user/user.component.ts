import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginServiceService } from 'src/app/modules/auth/services/login-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/modules/admin/services/admin.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private loginService: LoginServiceService,
    private router: Router
  ) {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  data: any;
  timer: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumn: string[] = [
    'firstName',
    'lastName',
    'department',
    'status',
    'action',
  ];
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

  //api call for getting the data of all user and set data into mattable
  getUserData(search: any) {
    this.adminService.getAllUser(search).subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        this.loginService.signOut();
      },
    });
  }

  getUserDataForEditOrDelete(event: any, action: string) {
    alert('getUserDataForEditOrDelete');
  }
}
