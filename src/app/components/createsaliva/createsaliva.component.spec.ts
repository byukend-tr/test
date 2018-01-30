import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesalivaComponent } from './createsaliva.component';

describe('CreatesalivaComponent', () => {
  let component: CreatesalivaComponent;
  let fixture: ComponentFixture<CreatesalivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesalivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesalivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
