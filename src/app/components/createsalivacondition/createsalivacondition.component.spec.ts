import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesalivaconditionComponent } from './createsalivacondition.component';

describe('CreatesalivaconditionComponent', () => {
  let component: CreatesalivaconditionComponent;
  let fixture: ComponentFixture<CreatesalivaconditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesalivaconditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesalivaconditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
