import { Component, ViewChild } from '@angular/core';
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
  selector: 'app-skiils',
  templateUrl: './skiils.component.html',
  styleUrls: ['./skiils.component.scss'],
})
export class SkiilsComponent {
  timer: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  data: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumn: string[] = ['skillTitle', 'status', 'action'];
  showNoDataFound: string;
  constructor(
    private adminService: AdminService,
    private loginService: LoginServiceService,
    private router: Router,
    private dialogService: ConfirmBoxService,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.getSkillData('');
  }

  //event called when user start searching
  keyupSearch(search: any) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.getSkillData(search.value);
    }, 1000);
  }

  // function for get all skill data
  getSkillData(search: string) {
    this.adminService.getAllSkills(search).subscribe({
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

  // function for edit delete skill
  getSkillDataForEditDelete(event: any, action: string) {
    if (action == 'edit') {
      this.router.navigate(['AdminPanel/skillForm', action, event.id]);
    } else {
      this.dialogService
        .openConfirmDialogue('Are you sure want to delete!!?')
        .afterClosed()
        .subscribe((res) => {
          if (res == true) {
            this.deleteSkill(event.id);
          }
        });
    }
  }

  //function for delete skill
  deleteSkill(skillId: number) {
    this.adminService.deleteSkill(skillId).subscribe({
      next: (res) => {
        if (res.statusCode == 200) {
          this.notifyService.showSuccess(res.message);
        } else {
          this.notifyService.showWarning(res.message);
        }
        this.getSkillData('');
      },
      error: () => {
        this.notifyService.showError(ErrorMessages.ApiErrorMessage.ApiFailed);
        this.showNoDataFound = 'No data found';
      },
    });
  }
}
