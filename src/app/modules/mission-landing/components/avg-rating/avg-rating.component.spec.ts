import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgRatingComponent } from './avg-rating.component';

describe('AvgRatingComponent', () => {
  let component: AvgRatingComponent;
  let fixture: ComponentFixture<AvgRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvgRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvgRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
