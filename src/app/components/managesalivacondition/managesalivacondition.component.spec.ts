import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagesalivaconditionComponent } from './managesalivacondition.component';

describe('ManagesalivaconditionComponent', () => {
  let component: ManagesalivaconditionComponent;
  let fixture: ComponentFixture<ManagesalivaconditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagesalivaconditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagesalivaconditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
