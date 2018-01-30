import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateantibodyconditionComponent } from './createantibodycondition.component';

describe('CreateantibodyconditionComponent', () => {
  let component: CreateantibodyconditionComponent;
  let fixture: ComponentFixture<CreateantibodyconditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateantibodyconditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateantibodyconditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
