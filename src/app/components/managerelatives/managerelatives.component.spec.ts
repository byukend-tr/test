import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerelativesComponent } from './managerelatives.component';

describe('ManagerelativesComponent', () => {
  let component: ManagerelativesComponent;
  let fixture: ComponentFixture<ManagerelativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerelativesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerelativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
