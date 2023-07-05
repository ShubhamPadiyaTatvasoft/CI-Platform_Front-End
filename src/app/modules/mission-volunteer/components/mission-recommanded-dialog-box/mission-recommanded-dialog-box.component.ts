import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { Component, Inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { VolunteerMissionService } from '../../services/volunteer-mission.service';
import { NotificationService } from 'src/shared/services/notification.service';
import { ActivatedRoute } from '@angular/router';
import { VolunteerMissionCardModel } from 'src/app/interfaces/volunteer-mission';
import { ErrorMessages } from 'src/app/common/errorMsg.static';
import { LoginServiceService } from 'src/app/modules/auth/services/login-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';








@Component({
  selector: 'app-mission-recommanded-dialog-box',
  templateUrl: './mission-recommanded-dialog-box.component.html',
  styleUrls: ['./mission-recommanded-dialog-box.component.scss']
})
export class MissionRecommandedDialogBoxComponent implements OnInit, OnChanges{
  token:any;
  userId:number;
  dataSource = new MatTableDataSource<any>();
   missionId:number;
  displayedColumn: string[] = [
  'select',
  'avatar',
  'firstName',
 ];
 showNoDataFound: string;
 selection = new SelectionModel<any>(true, []);
  

 isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  
  return numSelected === numRows;
}


toggleAllRows() {
  if (this.isAllSelected()) {
    this.selection.clear();
    return;
  }
  this.selection.select(...this.dataSource.data);
}

 GetEmail:any[] = [];
 emails:string[] = [];
checkboxLabel(row?: any): string {
  if (!row) {
   
    return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  }
  return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.Email + 1}`;
 
 
}
  constructor(private loginService:LoginServiceService,private volunteerMissionService:VolunteerMissionService,private notifyService:NotificationService,public route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: number,
  public dialogRef: MatDialogRef<MissionRecommandedDialogBoxComponent>){

  }
  @Input() MissionData:VolunteerMissionCardModel;
  
  
  ngOnInit(): void {

    
   
    
    
    this.token = this.loginService.getToken();
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.token);

    this.userId = decodedToken['unique_name'].split(',')[2];
    this.getUserData(this.userId);
  }
  ngOnChanges(): void {
   
   
   
  }


  SendMail(data:any){ 
    console.log(data.message);
    this.emails = [];
    const value = this.selection.selected;
    this.GetEmail = value;
    for(let i=0; i<this.GetEmail.length; i++){
      this.emails.push(this.GetEmail[i].email);
    }
    console.log(this.emails);
    debugger
    this.volunteerMissionService.Recommanded(this.emails,data.message,this.userId).subscribe({
      
      next:(res) => {
        if (res.statusCode === 200) {
          this.notifyService.showSuccess(res.message);
          
        } else {
          this.notifyService.showError(res.message);
        }
      }
    })
  }


  getUserData(userId:any) {
    
    this.volunteerMissionService.GetUserDeatails(+userId).subscribe({
      next: (res) => {
        console.log(res.data);
        
        this.dataSource = new MatTableDataSource(res.data);
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
}
