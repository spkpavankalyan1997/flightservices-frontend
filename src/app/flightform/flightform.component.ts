import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Airport } from 'src/airport.component';
import { Flight } from 'src/flight.component';
import { AirlineService } from '../airline.service';
import { AirportService } from '../airport.service';
import { FlightService } from '../flight.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-flightform',
  templateUrl: './flightform.component.html',
  styleUrls: ['./flightform.component.css']
})
export class FlightformComponent implements OnInit {
  isLoggedIn = false;
  airports: any;
  codes: any;
  flight = {
    airlineCode: '',
    fromCity: '',
    toCity: '',
    businessSeats: 0,
    nonBusinessSeats: 0,
    fromTime: '',
    toTime: '',
    businessClassPrice: 0,
    nonBusinessClassPrice: 0,
    noofRows: 0,
    status: ''
  }

  constructor(public tokenstorageservice: TokenStorageService, public airlineservice: AirlineService, public airportservice: AirportService, public flightservice: FlightService) { }


  save() {
    const observable = this.flightservice.createFlight(this.flight);
    observable.subscribe((response: any) => {
      console.log(response);
      window.location.reload();
    },
      function (error) {
        alert('something went wrong. Please try again.')
      });

  }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenstorageservice.getToken();
    const observable = this.airlineservice.getAllAirlineCodes();
    observable.subscribe(response => {
      console.log(response);
      this.codes = response;
    });

    this.airportservice.getAirports().subscribe((response: any) => {
      console.log(response);
      this.airports = response;
    });
  }



}
