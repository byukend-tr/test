import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageconditionComponent } from './managecondition.component';

describe('ManageconditionComponent', () => {
  let component: ManageconditionComponent;
  let fixture: ComponentFixture<ManageconditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageconditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageconditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
