import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { LoginServiceService } from 'src/app/modules/auth/services/login-service.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmBoxService } from '../../services/confirm-box.service';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss'],
})
export class MissionComponent implements OnInit {
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
  showNoDataFound: string;
  constructor(
    private adminService: AdminService,
    private loginService: LoginServiceService,
    private router: Router,
    private dialogService: ConfirmBoxService
  ) {}

  ngOnInit(): void {
    this.getMissionData('');
  }

  keyupSearch(search: any) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.getMissionData(search.value);
    }, 1000);
  }

  getMissionData(search: any) {
    this.adminService.getAllMission(search).subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res.data['missions']);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        if (res.data['missions'].length == 0) {
          this.showNoDataFound = 'No data found';
        } else {
          this.showNoDataFound = '';
        }
      },
      error: (err) => {
        this.loginService.signOut();
      },
    });
  }

  showNoDataFound1(abc: any) {}

  getMissionDataForEditOrDelete(event: any, action: string) {
    if (action == 'edit') {
      this.router.navigate(['AdminPanel/missionForm', action, event.id]);
    } else {
      this.dialogService
        .openConfirmDialogue('Are you sure want to delete!!?')
        .afterClosed()
        .subscribe((res) => {
          if (res == true) {
          }
        });
    }
  }
}
