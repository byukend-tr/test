import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuconditionComponent } from './menucondition.component';

describe('MenuconditionComponent', () => {
  let component: MenuconditionComponent;
  let fixture: ComponentFixture<MenuconditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuconditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuconditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
