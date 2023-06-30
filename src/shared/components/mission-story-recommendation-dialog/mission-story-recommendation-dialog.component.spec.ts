import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionStoryRecommendationDialogComponent } from './mission-story-recommendation-dialog.component';

describe('MissionStoryRecommendationDialogComponent', () => {
  let component: MissionStoryRecommendationDialogComponent;
  let fixture: ComponentFixture<MissionStoryRecommendationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionStoryRecommendationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionStoryRecommendationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
