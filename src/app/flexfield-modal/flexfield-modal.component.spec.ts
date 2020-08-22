import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexfieldModalComponent } from './flexfield-modal.component';

describe('FlexfieldModalComponent', () => {
  let component: FlexfieldModalComponent;
  let fixture: ComponentFixture<FlexfieldModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexfieldModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexfieldModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
