import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportlistComponent } from './airportlist.component';

describe('AirportlistComponent', () => {
  let component: AirportlistComponent;
  let fixture: ComponentFixture<AirportlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirportlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
