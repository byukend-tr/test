import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageantibodyconditionComponent } from './manageantibodycondition.component';

describe('ManageantibodyconditionComponent', () => {
  let component: ManageantibodyconditionComponent;
  let fixture: ComponentFixture<ManageantibodyconditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageantibodyconditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageantibodyconditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
