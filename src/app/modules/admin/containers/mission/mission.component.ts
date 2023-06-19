import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { LoginServiceService } from 'src/app/modules/auth/services/login-service.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss'],
})
export class MissionComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private loginService: LoginServiceService,
    private router: Router
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource<any>();
  timer: any;
  displayedColumn: string[] = [
    'MissionTitle',
    'MissionType',
    'startDate',
    'endDate',
    'action',
  ];

  ngOnInit(): void {
    // this.getUserData('');
    this.getMissionData('');
  }

  keyupSearch(search: any) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      // this.getUserData(search.value);
    }, 1000);
  }

  // getUserData(search: any) {
  //   this.adminService.getAllUser(search).subscribe({
  //     next: (res) => {
  //       this.dataSource = new MatTableDataSource(res);
  //       this.dataSource.paginator = this.paginator;
  //       this.dataSource.sort = this.sort;
  //     },
  //     error: (err) => {
  //       this.loginService.signOut();
  //     },
  //   });
  // }

  getMissionData(search: any) {
    this.adminService.getAllMission(search).subscribe({
      next: (res) => {
        console.log(res.data);
        this.dataSource = new MatTableDataSource(res.data['missions']);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        this.loginService.signOut();
      },
    });
  }

  getMissionDataForEditOrDelete(event: any, action: string) {
    this.router.navigate(['/AdminPanel/usercrud', event.id, action]);
  }
}
