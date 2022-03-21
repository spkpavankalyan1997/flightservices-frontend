import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Airport } from 'src/airport.component';
import { AirportService } from '../airport.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-airportlist',
  templateUrl: './airportlist.component.html',
  styleUrls: ['./airportlist.component.css']
})
export class AirportlistComponent implements OnInit {
  isLoggedIn=false;
  airports!: Observable<Airport[]>;
  airport!: any;

  constructor(public tokenstorageservice: TokenStorageService,private airportservice: AirportService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn=!!this.tokenstorageservice.getToken();
    this.airports = this.airportservice.getAirports();
  }

  reload() {
    this.airports = this.airportservice.getAirports();
  }

  deleteAirline(id: number) {
    const observable = this.airportservice.deleteAirport(id);
    observable.subscribe((response: any) => {
      this.reload();
    },
      function (error) {
        alert('something went wrong. Please try again.')
      });
  }
}
