import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesetModalComponent } from './valueset-modal.component';

describe('ValuesetModalComponent', () => {
  let component: ValuesetModalComponent;
  let fixture: ComponentFixture<ValuesetModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuesetModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuesetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
