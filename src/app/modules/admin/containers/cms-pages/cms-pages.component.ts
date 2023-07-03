import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  selector: 'app-cms-pages',
  templateUrl: './cms-pages.component.html',
  styleUrls: ['./cms-pages.component.scss'],
})
export class CMSPagesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  data: any;
  timer: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumn: string[] = ['Title', 'Status', 'Action'];
  showNoDataFound: string;

  constructor(
    private adminService: AdminService,
    private loginService: LoginServiceService,
    private router: Router,
    private dialogService: ConfirmBoxService,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.getCmsData('');
  }

  //event called when user start searching
  keyupSearch(search: any) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.getCmsData(search.value);
    }, 1000);
  }

  //api call for get all cms page data
  getCmsData(search: string) {
    this.adminService.getAllCMS(search).subscribe({
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

  // function for addEditDelete Cms page
  getCmsDataForEditOrDelete(event: any, action: string) {
    if (action == 'edit') {
      this.router.navigate(['AdminPanel/cmsForm', action, event.id]);
    } else {
      this.dialogService
        .openConfirmDialogue('Are you sure want to delete!!?')
        .afterClosed()
        .subscribe((res) => {
          if (res == true) {
            this.deleteCms(+event.id);
          }
        });
    }
  }

  //api call for delete cms page
  deleteCms(cmsId: number) {
    this.adminService.deleteCms(cmsId).subscribe({
      next: (res) => {
        if (res.statusCode == 200) {
          this.getCmsData('');
          this.notifyService.showInfo(res.message);
        } else {
          this.notifyService.showError(res.message);
        }
      },
      error: (err) => {
        this.notifyService.showError(ErrorMessages.ApiErrorMessage.ApiFailed);
        this.showNoDataFound = 'No data found';
      },
    });
  }
}
