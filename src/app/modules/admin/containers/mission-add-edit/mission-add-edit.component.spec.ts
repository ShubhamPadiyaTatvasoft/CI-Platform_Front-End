import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionAddEditComponent } from './mission-add-edit.component';

describe('MissionAddEditComponent', () => {
  let component: MissionAddEditComponent;
  let fixture: ComponentFixture<MissionAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
