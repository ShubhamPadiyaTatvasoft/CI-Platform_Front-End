import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionAvgRatingComponent } from './mission-avg-rating.component';

describe('MissionAvgRatingComponent', () => {
  let component: MissionAvgRatingComponent;
  let fixture: ComponentFixture<MissionAvgRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionAvgRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionAvgRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
