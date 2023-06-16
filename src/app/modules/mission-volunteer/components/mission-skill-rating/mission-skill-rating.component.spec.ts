import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionSkillRatingComponent } from './mission-skill-rating.component';

describe('MissionSkillRatingComponent', () => {
  let component: MissionSkillRatingComponent;
  let fixture: ComponentFixture<MissionSkillRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionSkillRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionSkillRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
