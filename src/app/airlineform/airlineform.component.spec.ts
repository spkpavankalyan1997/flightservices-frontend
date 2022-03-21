import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineformComponent } from './airlineform.component';

describe('AirlineformComponent', () => {
  let component: AirlineformComponent;
  let fixture: ComponentFixture<AirlineformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirlineformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlineformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
