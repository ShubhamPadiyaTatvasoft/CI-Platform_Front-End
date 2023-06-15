import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalButtonComponent } from './universal-button.component';

describe('UniversalButtonComponent', () => {
  let component: UniversalButtonComponent;
  let fixture: ComponentFixture<UniversalButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversalButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
