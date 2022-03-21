import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Flight } from 'src/flight.component';
import { AirportService } from '../airport.service';
import { FlightService } from '../flight.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent implements OnInit {
  presentdate: any;
  isNotFutureDate = false;
  airports: any;
  fromPlace: any;
  toPlace: any;
  selectedDate!: Time;
  isLoggedIn = false;
  showUser!: String;
  flights!: Observable<Flight[]>;
  flight: any;
  constructor(public airportservice: AirportService, public tokenstorageservice: TokenStorageService, public flightservice: FlightService, public router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenstorageservice.getToken();

    this.airportservice.getAirports().subscribe((response: any) => {
      console.log(response);
      this.airports = response;
    });
  }

  bookFlight(id: number) {
    console.log(id);
    this.router.navigate(['bookingform', id]);
  }

  getSearchedFlights() {
    this.flights = this.flightservice.getSearchedFlights(this.fromPlace, this.toPlace, this.selectedDate);
  }

  getAllFlights() {
    this.flights = this.flightservice.getAllFlights();
  }

  checkDate() {
  }

  closeError() {
    this.isNotFutureDate = false;
  }

}
