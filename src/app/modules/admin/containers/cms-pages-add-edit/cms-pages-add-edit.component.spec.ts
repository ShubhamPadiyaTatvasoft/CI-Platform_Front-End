import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMSPagesAddEditComponent } from './cms-pages-add-edit.component';

describe('CMSPagesAddEditComponent', () => {
  let component: CMSPagesAddEditComponent;
  let fixture: ComponentFixture<CMSPagesAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CMSPagesAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CMSPagesAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
