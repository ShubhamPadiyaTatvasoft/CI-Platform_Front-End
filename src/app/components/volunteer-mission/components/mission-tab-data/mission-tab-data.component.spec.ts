import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionTabDataComponent } from './mission-tab-data.component';

describe('MissionTabDataComponent', () => {
  let component: MissionTabDataComponent;
  let fixture: ComponentFixture<MissionTabDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionTabDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionTabDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
