import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewantibodyphenotypedetailComponent } from './viewantibodyphenotypedetail.component';

describe('ViewantibodyphenotypedetailComponent', () => {
  let component: ViewantibodyphenotypedetailComponent;
  let fixture: ComponentFixture<ViewantibodyphenotypedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewantibodyphenotypedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewantibodyphenotypedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
