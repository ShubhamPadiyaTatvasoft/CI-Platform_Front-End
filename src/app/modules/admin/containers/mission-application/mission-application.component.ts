import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../../services/admin.service';
import { LoginServiceService } from 'src/app/modules/auth/services/login-service.service';
import { Router } from '@angular/router';
import { ConfirmBoxService } from '../../services/confirm-box.service';
import { NotificationService } from 'src/shared/services/notification.service';
import { ErrorMessages } from 'src/app/common/errorMsg.static';

@Component({
  selector: 'app-mission-application',
  templateUrl: './mission-application.component.html',
  styleUrls: ['./mission-application.component.scss'],
})
export class MissionApplicationComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  data: any;
  timer: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumn: string[] = [
    'MissionTitle',
    'MissionId',
    'UserId',
    'UserName',
    'MissionApplicationId',
    'action',
  ];

  showNoDataFound: string;
  alertMsg: string;

  constructor(
    private adminService: AdminService,
    private loginService: LoginServiceService,
    private router: Router,
    private dialogService: ConfirmBoxService,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.getMissionApplicationData('');
  }

  //event called when user start searching
  keyupSearch(search: any) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.getMissionApplicationData(search.value);
    }, 1000);
  }

  //get all mission Application data from api
  getMissionApplicationData(search: string) {
    this.adminService.getAllMissionApplication(search).subscribe({
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

  //approve reject missionApplication api call
  missionApplicationApproveReject(event: any, action: string) {
    if (action == 'rejected') {
      this.alertMsg = 'reject';
    } else {
      this.alertMsg = 'approve';
    }
    this.dialogService
      .openConfirmDialogue('Are you sure want to ' + this.alertMsg + '!!?')
      .afterClosed()
      .subscribe((res) => {
        if (res == true) {
          this.adminService
            .approveRejectMissionApplication(+event.id, action)
            .subscribe({
              next: (res) => {
                if (res.statusCode == 200) {
                  this.notifyService.showSuccess(res.message);
                  this.getMissionApplicationData('');
                } else {
                  this.notifyService.showSuccess(res.message);
                }
              },
              error: (err) => {
                this.notifyService.showError(
                  ErrorMessages.ApiErrorMessage.ApiFailed
                );
              },
            });
        }
      });
  }
}
