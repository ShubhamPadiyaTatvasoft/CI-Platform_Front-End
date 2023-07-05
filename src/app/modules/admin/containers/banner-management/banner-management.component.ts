import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { LoginServiceService } from 'src/app/modules/auth/services/login-service.service';
import { Router } from '@angular/router';
import { ConfirmBoxService } from '../../services/confirm-box.service';
import { NotificationService } from 'src/shared/services/notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-banner-management',
  templateUrl: './banner-management.component.html',
  styleUrls: ['./banner-management.component.scss'],
})
export class BannerManagementComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource<any>();
  timer: any;
  displayedColumn: string[] = ['bannerText', 'sortOrder', 'action'];
  showNoDataFound: string;
  preLoader: string = 'hidden';
  constructor(
    private adminService: AdminService,
    private loginService: LoginServiceService,
    private router: Router,
    private dialogService: ConfirmBoxService,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.getAllBannerInfo('');
  }

  //event called when user start searching
  keyupSearch(search: any) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.getAllBannerInfo(search.value);
    }, 1000);
  }

  //api call for get all banners data
  getAllBannerInfo(search: string) {
    this.preLoader = 'inline-block absolute';
    this.adminService.getAllBannerData(search).subscribe({
      next: (res) => {
        this.preLoader = 'hidden';
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        if (res.data.length == 0) {
          this.showNoDataFound = 'No data found please login again!!';
        } else {
          this.showNoDataFound = '';
        }
      },
      error: () => {
        this.preLoader = 'hidden';
        localStorage.clear();
        this.showNoDataFound = 'No data found please login again!!';
      },
    });
  }

  //add, edit,delete the banner
  getBannerDataForEditOrDelete(event: any, action: string) {
    if (action == 'edit') {
      this.router.navigate(['AdminPanel/bannerForm', action, event.id]);
    } else {
      this.dialogService
        .openConfirmDialogue('Are you sure want to delete!!?')
        .afterClosed()
        .subscribe((res) => {
          if (res == true) {
            this.deleteBanner(+event.id);
          }
        });
    }
  }

  //api call for deleting the banner
  deleteBanner(bannerId: number) {
    this.adminService.deleteBanner(bannerId).subscribe({
      next: (res) => {
        if (res.statusCode == 200) {
          this.notifyService.showSuccess(res.message);
        } else {
          this.notifyService.showWarning(res.message);
        }
        this.getAllBannerInfo('');
      },
      error: () => {
        localStorage.clear();
        this.showNoDataFound = 'No data found please login again!!';
      },
    });
  }
}
