import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionSkillDaysRatingComponent } from './mission-skill-days-rating.component';

describe('MissionSkillDaysRatingComponent', () => {
  let component: MissionSkillDaysRatingComponent;
  let fixture: ComponentFixture<MissionSkillDaysRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionSkillDaysRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionSkillDaysRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
