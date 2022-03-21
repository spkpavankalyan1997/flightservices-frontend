import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bookingform2Component } from './bookingform2.component';

describe('Bookingform2Component', () => {
  let component: Bookingform2Component;
  let fixture: ComponentFixture<Bookingform2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bookingform2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bookingform2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
