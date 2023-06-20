import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionRecommandedDialogBoxComponent } from './mission-recommanded-dialog-box.component';

describe('MissionRecommandedDialogBoxComponent', () => {
  let component: MissionRecommandedDialogBoxComponent;
  let fixture: ComponentFixture<MissionRecommandedDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionRecommandedDialogBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionRecommandedDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
