import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AolBtnComponent } from './aol-btn.component';

describe('AolBtnComponent', () => {
  let component: AolBtnComponent;
  let fixture: ComponentFixture<AolBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AolBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AolBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
