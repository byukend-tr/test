import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsalivaphenotypedetailComponent } from './viewsalivaphenotypedetail.component';

describe('ViewsalivaphenotypedetailComponent', () => {
  let component: ViewsalivaphenotypedetailComponent;
  let fixture: ComponentFixture<ViewsalivaphenotypedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsalivaphenotypedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsalivaphenotypedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
