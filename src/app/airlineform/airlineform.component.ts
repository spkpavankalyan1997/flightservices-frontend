import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AirlineService } from '../airline.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'airlineform',
  templateUrl: './airlineform.component.html',
  styleUrls: ['./airlineform.component.css']
})
export class AirlineformComponent implements OnInit {
  formsaved=true;
  airlines: any = [];
  isLoggedIn = false;
  airline = {
    code: '',
    description: '',
    rating: 0,
    status: "",
    instrument: ""
  }
  save() {
    const observable = this.airlineService.createAirline(this.airline);
    observable.subscribe((response: any) => {
      console.log(response);
      this.airlines.push(response);
      window.location.reload();
    },
      function (error) { 
        alert('something went wrong. Please try again.')
      });
this.formsaved=false;
  }
  constructor(public tokenStorageService:TokenStorageService  ,public route: ActivatedRoute, public airlineService: AirlineService, public router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
  }

}
