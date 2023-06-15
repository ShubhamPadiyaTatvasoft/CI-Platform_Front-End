import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeAndGoalDetailComponent } from './time-and-goal-detail.component';

describe('TimeAndGoalDetailComponent', () => {
  let component: TimeAndGoalDetailComponent;
  let fixture: ComponentFixture<TimeAndGoalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeAndGoalDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeAndGoalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
