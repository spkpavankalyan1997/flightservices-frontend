import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportformComponent } from './airportform.component';

describe('AirportformComponent', () => {
  let component: AirportformComponent;
  let fixture: ComponentFixture<AirportformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirportformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
