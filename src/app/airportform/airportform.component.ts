import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Airport } from 'src/airport.component';
import { AirportService } from '../airport.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-airportform',
  templateUrl: './airportform.component.html',
  styleUrls: ['./airportform.component.css']
})
export class AirportformComponent implements OnInit {
  isLoggedIn = false;

  airport =
    {
      code: '',
      name: ''
    }

  constructor(public tokenstorageservice: TokenStorageService, public airportservice: AirportService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoggedIn=!!this.tokenstorageservice.getToken();
  }

  save() {
    const observable = this.airportservice.saveAirport(this.airport);
    observable.subscribe((response: any) => {
      console.log(response);
      window.location.reload();
    },
      function (error) {
        alert('something went wrong. Please try again.')
      });

  }

}
