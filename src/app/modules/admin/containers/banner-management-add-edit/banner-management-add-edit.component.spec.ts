import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerManagementAddEditComponent } from './banner-management-add-edit.component';

describe('BannerManagementAddEditComponent', () => {
  let component: BannerManagementAddEditComponent;
  let fixture: ComponentFixture<BannerManagementAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerManagementAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerManagementAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
