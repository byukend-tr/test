import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageviewdetailComponent } from './manageviewdetail.component';

describe('ManageviewdetailComponent', () => {
  let component: ManageviewdetailComponent;
  let fixture: ComponentFixture<ManageviewdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageviewdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageviewdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
