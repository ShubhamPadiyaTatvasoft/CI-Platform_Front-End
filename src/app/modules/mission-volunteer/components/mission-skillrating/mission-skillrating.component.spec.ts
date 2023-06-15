import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionSkillratingComponent } from './mission-skillrating.component';

describe('MissionSkillratingComponent', () => {
  let component: MissionSkillratingComponent;
  let fixture: ComponentFixture<MissionSkillratingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionSkillratingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionSkillratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
