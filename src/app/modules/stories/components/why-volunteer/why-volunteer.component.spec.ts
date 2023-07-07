import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyVolunteerComponent } from './why-volunteer.component';

describe('WhyVolunteerComponent', () => {
  let component: WhyVolunteerComponent;
  let fixture: ComponentFixture<WhyVolunteerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyVolunteerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
