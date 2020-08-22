import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesetValueModalComponent } from './valueset-value-modal.component';

describe('ValuesetValueModalComponent', () => {
  let component: ValuesetValueModalComponent;
  let fixture: ComponentFixture<ValuesetValueModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuesetValueModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuesetValueModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
