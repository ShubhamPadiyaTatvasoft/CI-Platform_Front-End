import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerMissionComponent } from './volunteer-mission.component';

describe('VolunteerMissionComponent', () => {
  let component: VolunteerMissionComponent;
  let fixture: ComponentFixture<VolunteerMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerMissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
