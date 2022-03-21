import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from 'src/flight.component';
import { FlightService } from '../flight.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-flightlist',
  templateUrl: './flightlist.component.html',
  styleUrls: ['./flightlist.component.css']
})
export class FlightlistComponent implements OnInit {
  flightNotChangable = false;
  isLoggedIn = false;
  flights!: Observable<Flight[]>;
  flight: any;

  constructor(public flightservice: FlightService, public tokenstorageservice: TokenStorageService) { }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenstorageservice.getToken();
    this.flights = this.flightservice.getAllFlights();
  }

  closeError() {
    this.flightNotChangable = false;
  }

  reload() {
    this.flights = this.flightservice.getAllFlights();
  }

  modifyFlight(flight: any) {
    if (this.flightservice.checkFlightUsability(flight.id)) {
      this.flightNotChangable = true;
      return;
    }
    const observable = this.flightservice.updateFlight(flight);
    observable.subscribe((response: any) => {
      console.log(response);
      this.reload();
    },
      function (error) {
        alert('something went wrong. Please try again.')
      });
  }

  deleteFlight(id: number) {
    if (this.flightservice.checkFlightUsability(id)) {
      this.flightNotChangable = true;
      return;
    }
    const observable = this.flightservice.deleteFlight(id);
    observable.subscribe((response: any) => {
    },
      function (error) {
        alert('something went wrong. Please try again.')
      });
    this.reload();


  }

}


