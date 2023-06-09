import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryDescriptionComponent } from './story-description.component';

describe('StoryDescriptionComponent', () => {
  let component: StoryDescriptionComponent;
  let fixture: ComponentFixture<StoryDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
