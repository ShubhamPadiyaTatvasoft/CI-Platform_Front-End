import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionInformationComponent } from './mission-information.component';

describe('MissionInformationComponent', () => {
  let component: MissionInformationComponent;
  let fixture: ComponentFixture<MissionInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
