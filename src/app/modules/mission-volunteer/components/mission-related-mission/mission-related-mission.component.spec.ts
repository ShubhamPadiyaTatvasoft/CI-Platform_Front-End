import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionRelatedMissionComponent } from './mission-related-mission.component';

describe('MissionRelatedMissionComponent', () => {
  let component: MissionRelatedMissionComponent;
  let fixture: ComponentFixture<MissionRelatedMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionRelatedMissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionRelatedMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
