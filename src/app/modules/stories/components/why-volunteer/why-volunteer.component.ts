import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VolunteerMissionCardModel } from 'src/app/interfaces/volunteer-mission';
import { VolunteerMissionService } from 'src/app/modules/mission-volunteer/services/volunteer-mission.service';

@Component({
  selector: 'app-why-volunteer',
  templateUrl: './why-volunteer.component.html',
  styleUrls: ['./why-volunteer.component.scss'],
})
export class WhyVolunteerComponent implements OnInit {
  missionId: number;

  constructor(
    public dialog: MatDialog,
    private volunteerMissionService: VolunteerMissionService
  ) {}
  @Input() MissionData: VolunteerMissionCardModel;
  @Output() missionIds = new EventEmitter<number>();

  ngOnInit(): void {}

  openDialog() {
    this.volunteerMissionService.openConfirmDialogue(
      this.MissionData.missionId
    );
  }
}
