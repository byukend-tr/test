import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsearchComponent } from './testsearch.component';

describe('TestsearchComponent', () => {
  let component: TestsearchComponent;
  let fixture: ComponentFixture<TestsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
