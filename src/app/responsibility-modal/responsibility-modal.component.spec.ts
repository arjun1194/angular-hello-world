import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibilityModalComponent } from './responsibility-modal.component';

describe('ResponsibilityModalComponent', () => {
  let component: ResponsibilityModalComponent;
  let fixture: ComponentFixture<ResponsibilityModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsibilityModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsibilityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
