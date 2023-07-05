import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionVolunteerRoutingModule } from './mission-volunteer-routing.module';
import { MissionImageCarouselComponent } from './components/mission-image-carousel/mission-image-carousel.component';
import { MissionInformationComponent } from './components/mission-information/mission-information.component';
import { MissionTabLayoutComponent } from './components/mission-tab-layout/mission-tab-layout.component';
import { MissionRecentVolunteerComponent } from './components/mission-recent-volunteer/mission-recent-volunteer.component';
import { MissionDetailComponent } from './container/mission-detail/mission-detail.component';
import { MissionRelatedMissionComponent } from './components/mission-related-mission/mission-related-mission.component';
import { MissionSkillRatingComponent } from './components/mission-skill-rating/mission-skill-rating.component';
import { MissionRecommandedDialogBoxComponent } from './components/mission-recommanded-dialog-box/mission-recommanded-dialog-box.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { SharedMaterialModule } from 'src/shared/modules/material.module';
import { MatCardModule } from '@angular/material/card';
import { NgxStarRatingModule } from 'ngx-star-rating';



@NgModule({
  declarations: [
    MissionImageCarouselComponent,
    MissionInformationComponent,
    MissionTabLayoutComponent,
    MissionRecentVolunteerComponent,
    MissionDetailComponent,
    MissionRelatedMissionComponent,
    MissionSkillRatingComponent,
    MissionRecommandedDialogBoxComponent
  ],
  imports: [
    CommonModule,
    MissionVolunteerRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTabsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    SharedMaterialModule,
    MatCardModule,
    NgxStarRatingModule 
    



    
    

    
    

    
  ]
})
export class MissionVolunteerModule { }
