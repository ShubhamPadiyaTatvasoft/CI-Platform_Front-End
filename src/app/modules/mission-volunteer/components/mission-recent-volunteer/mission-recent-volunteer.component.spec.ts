import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionRecentVolunteerComponent } from './mission-recent-volunteer.component';

describe('MissionRecentVolunteerComponent', () => {
  let component: MissionRecentVolunteerComponent;
  let fixture: ComponentFixture<MissionRecentVolunteerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionRecentVolunteerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionRecentVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
