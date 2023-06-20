import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionStoryCardsComponent } from './mission-story-cards.component';

describe('MissionStoryCardsComponent', () => {
  let component: MissionStoryCardsComponent;
  let fixture: ComponentFixture<MissionStoryCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionStoryCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionStoryCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
