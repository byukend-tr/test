import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateantibodyComponent } from './createantibody.component';

describe('CreateantibodyComponent', () => {
  let component: CreateantibodyComponent;
  let fixture: ComponentFixture<CreateantibodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateantibodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateantibodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
