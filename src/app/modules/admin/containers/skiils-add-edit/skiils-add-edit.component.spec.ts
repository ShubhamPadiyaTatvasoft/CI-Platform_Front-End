import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiilsAddEditComponent } from './skiils-add-edit.component';

describe('SkiilsAddEditComponent', () => {
  let component: SkiilsAddEditComponent;
  let fixture: ComponentFixture<SkiilsAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkiilsAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkiilsAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
