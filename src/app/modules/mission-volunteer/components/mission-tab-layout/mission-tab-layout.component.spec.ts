import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionTabLayoutComponent } from './mission-tab-layout.component';

describe('MissionTabLayoutComponent', () => {
  let component: MissionTabLayoutComponent;
  let fixture: ComponentFixture<MissionTabLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionTabLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionTabLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
