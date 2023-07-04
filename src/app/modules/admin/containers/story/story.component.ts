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
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  data: any;
  timer: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumn: string[] = [
    'StoryTitle',
    'FullName',
    'MissionTitle',
    'Action',
  ];
  stories: any[] = [];
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
    this.getStoryData('');
  }

  //event called when user start searching
  keyupSearch(search: any) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.getStoryData(search.value);
    }, 1000);
  }

  //get all story data from api
  getStoryData(search: string) {
    this.adminService.getAllStories(search).subscribe({
      next: (res) => {
        this.stories = [];
        for (let i = 0; i < res.data['missions'].length; i++) {
          for (let j = 0; j < res.data['stories'].length; j++) {
            for (let k = 0; k < res.data['users'].length; k++) {
              if (
                res.data['users'][k].userId == res.data['stories'][j].userId
              ) {
                if (
                  res.data['stories'][j].missionId ==
                  res.data['missions'][i].missionId
                ) {
                  let story = {
                    StoryTitle: res.data['stories'][j].title,
                    missionTitle: res.data['missions'][i].title,
                    storyId: res.data['stories'][j].storyId,
                    fullName:
                      res.data['users'][k].firstName +
                      ' ' +
                      res.data['users'][k].lastName,
                  };
                  this.stories.push(story);
                }
              }
            }
          }
        }
        this.dataSource = new MatTableDataSource(this.stories);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        if (this.stories.length == 0) {
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

  //approve reject delete story api call
  storyApproveRejectDelete(event: any, action: string) {
    if (action == 'rejected') {
      this.alertMsg = 'reject';
    } else if (action == 'approved') {
      this.alertMsg = 'approve';
    } else {
      this.alertMsg = action;
    }
    this.dialogService
      .openConfirmDialogue('Are you sure want to ' + this.alertMsg + '!!?')
      .afterClosed()
      .subscribe((res) => {
        if (res == true) {
          this.adminService
            .approveRejectDeleteStory(event.id, action)
            .subscribe({
              next: (res) => {
                if (res.statusCode == 200) {
                  this.notifyService.showSuccess(res.message);
                  this.getStoryData('');
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
