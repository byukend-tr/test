import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateaboconditionComponent } from './createabocondition.component';

describe('CreateaboconditionComponent', () => {
  let component: CreateaboconditionComponent;
  let fixture: ComponentFixture<CreateaboconditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateaboconditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateaboconditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
