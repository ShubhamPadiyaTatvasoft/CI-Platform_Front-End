import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MissionStoryCardComponent } from './mission-story-card.component';



describe('MissionStoryCardsComponent', () => {
  let component: MissionStoryCardComponent;
  let fixture: ComponentFixture<MissionStoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionStoryCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionStoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
