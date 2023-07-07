import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryImageCarouselComponent } from './story-image-carousel.component';

describe('StoryImageCarouselComponent', () => {
  let component: StoryImageCarouselComponent;
  let fixture: ComponentFixture<StoryImageCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryImageCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryImageCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
