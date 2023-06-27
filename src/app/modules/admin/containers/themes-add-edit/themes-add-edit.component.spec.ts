import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesAddEditComponent } from './themes-add-edit.component';

describe('ThemesAddEditComponent', () => {
  let component: ThemesAddEditComponent;
  let fixture: ComponentFixture<ThemesAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemesAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemesAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
