import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateaboComponent } from './createabo.component';

describe('CreateaboComponent', () => {
  let component: CreateaboComponent;
  let fixture: ComponentFixture<CreateaboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateaboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateaboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
