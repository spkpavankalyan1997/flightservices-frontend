import { Component, OnInit } from '@angular/core';
import { AirlineService } from '../airline.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Airline } from 'src/airline.component';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-airlinelist',
  templateUrl: './airlinelist.component.html',
  styleUrls: ['./airlinelist.component.css']
})
export class AirlinelistComponent implements OnInit {
  isLoggedIn = false;
  airlines!: Observable<Airline[]>;
  airline: any;

  constructor(public tokenStorageService: TokenStorageService, private airlineService: AirlineService, private router: Router) { }

  ngOnInit(): void {
    this.airlines = this.airlineService.getAirlines();
    this.isLoggedIn = !!this.tokenStorageService.getToken();
  }

  reload() {
    this.airlines = this.airlineService.getAirlines();
  }

  modifyAirline(airline: any) {
    const observable = this.airlineService.updateAirline(airline);
    observable.subscribe((response: any) => {
      console.log(response);
      this.reload();
    },
      function (error) {
        alert('something went wrong. Please try again.')
      });
  }

  deleteAirline(id: number) {
    const observable = this.airlineService.deleteAirline(id);
    observable.subscribe((response: any) => {
      this.reload();
    },
      function (error) {
        alert('something went wrong. Please try again.')
      });
  }

  blockAirline(id: number) {
    const observable = this.airlineService.blockAirline(id);
    observable.subscribe((response: any) => {
      this.reload();
    },
      function (error) {
        alert('something went wrong. Please try again.')
      });
  }
}
