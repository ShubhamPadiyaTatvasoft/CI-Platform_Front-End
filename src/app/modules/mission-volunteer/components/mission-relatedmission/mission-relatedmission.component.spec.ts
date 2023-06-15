import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionRelatedmissionComponent } from './mission-relatedmission.component';

describe('MissionRelatedmissionComponent', () => {
  let component: MissionRelatedmissionComponent;
  let fixture: ComponentFixture<MissionRelatedmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionRelatedmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionRelatedmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
