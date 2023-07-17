import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { VolunteerMissionCardModel } from 'src/app/interfaces/volunteer-mission';
import { VolunteerMissionService } from 'src/app/modules/mission-volunteer/services/volunteer-mission.service';

@Component({
  selector: 'app-why-volunteer',
  templateUrl: './why-volunteer.component.html',
  styleUrls: ['./why-volunteer.component.scss'],
})
export class WhyVolunteerComponent implements OnInit {
  
  constructor(
  ) {}

  ngOnInit(): void {
   
  }
}
