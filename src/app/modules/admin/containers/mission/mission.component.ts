import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { LoginServiceService } from 'src/app/modules/auth/services/login-service.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmBoxService } from '../../services/confirm-box.service';
import { NotificationService } from 'src/shared/services/notification.service';
import { ErrorMessages } from 'src/app/common/errorMsg.static';

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
    private dialogService: ConfirmBoxService,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.getMissionData('');
  }

  //event called when user start searching
  keyupSearch(search: any) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.getMissionData(search.value);
    }, 1000);
  }

  //api call for getting the data of all missions and set data into mat-table
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
        localStorage.clear();
        this.showNoDataFound = 'No data found please login again!!';
      },
    });
  }

  //function for opening confirmation box for edit or delete mission
  getMissionDataForEditOrDelete(event: any, action: string) {
    if (action == 'edit') {
      this.router.navigate(['AdminPanel/missionForm', action, event.id]);
    } else {
      this.dialogService
        .openConfirmDialogue('Are you sure want to delete!!?')
        .afterClosed()
        .subscribe((res) => {
          if (res == true) {
            this.deleteMission(+event.id);
          }
        });
    }
  }

  //api call for deleting the data of mission
  deleteMission(missionId: number) {
    this.adminService.deleteMission(+missionId).subscribe({
      next: (res) => {
        this.notifyService.showInfo(res.message);
        this.getMissionData('');
      },
      error: () => {
        this.notifyService.showInfo(ErrorMessages.ApiErrorMessage.ApiFailed);
      },
    });
  }
}
