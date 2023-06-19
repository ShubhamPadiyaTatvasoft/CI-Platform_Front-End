import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionImageCarouselComponent } from './mission-image-carousel.component';

describe('MissionImageCarouselComponent', () => {
  let component: MissionImageCarouselComponent;
  let fixture: ComponentFixture<MissionImageCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionImageCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionImageCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
