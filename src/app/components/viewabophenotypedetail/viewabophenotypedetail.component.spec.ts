import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewabophenotypedetailComponent } from './viewabophenotypedetail.component';

describe('ViewabophenotypedetailComponent', () => {
  let component: ViewabophenotypedetailComponent;
  let fixture: ComponentFixture<ViewabophenotypedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewabophenotypedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewabophenotypedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
