import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { passenger } from 'src/passenger.component';
import { FlightService } from '../flight.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-bookingform2',
  templateUrl: './bookingform2.component.html',
  styleUrls: ['./bookingform2.component.css']
})
export class Bookingform2Component implements OnInit {
  formNotFilled = false;
  isLoggedIn = false;
  ticketType!: string;
  mealsType!: string;
  flightid!: number;
  bookingSuccessful!: boolean;
  tickettype = {
    code: '',
    name: ''
  }
  tickettypes: any[] = [];
  passengers: any[] = [];
  passenger = {
    name: '',
    gender: '',
    age: 0,
    mealsType: '',
    ticketType: ''
  }

  flight = {
    id: 0,
    airlineCode: '',
    fromCity: '',
    toCity: '',
    businessSeats: '',
    nonBusinessSeats: '',
    fromTime: '',
    toTime: '',
    businessClassPrice: 0,
    nonBusinessClassPrice: 0,
    noofRows: 0,
    status: ''
  }
  bookingdetails = {
    userID: 0,
    totalAmount: 0,
    flightID: 0,
    fromPlace: '',
    toPlace: '',
    fromTime: '',
    toTime: '',
    status: '',
    totalPassengers: 0,
    passengers: this.passengers
  }

  constructor(public router: Router, public flightservice: FlightService, public tokenStorageService: TokenStorageService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.flightid = this.route.snapshot.params['id'];
    this.doSetFlightDetails();
    const user = this.tokenStorageService.getUser();
    this.bookingdetails.userID = user.id;
    this.bookingdetails.totalPassengers = 1;
    this.passengers.push(this.passenger);
  }
  doSetFlightDetails() {
    const observable = this.flightservice.getFlight(this.flightid);
    observable.subscribe((response: any) => {
      console.log(response);
      this.flight = response;
    })
  }

  save() {
    this.SetFlightDetails()
    if (this.formNotFilled) {
      return;
    }
    console.log(this.bookingdetails);
    const observable = this.flightservice.createBooking(this.bookingdetails);
    observable.subscribe((response: any) => {
      console.log(response);
    },
      function (error) {
        alert('something went wrong. Please try again.')
      });
    window.location.reload();
    this.bookingSuccessful = true;
  }
  SetFlightDetails() {
    this.bookingdetails.flightID = this.flight.id;
    this.bookingdetails.fromPlace = this.flight.fromCity;
    this.bookingdetails.toPlace = this.flight.toCity;
    this.bookingdetails.fromTime = this.flight.fromTime;
    this.bookingdetails.toTime = this.flight.toTime;
    this.passengers.forEach(passenger => {
      passenger.mealsType = this.mealsType;
      passenger.ticketType = this.ticketType;
    })
    this.checkForm(this.passengers);
  }

  checkForm(passengers: passenger[]) {
    passengers.forEach(passenger => {
      if (passenger.age == 0 || passenger.gender == '' || passenger.mealsType == '') {
        this.formNotFilled = true;
      }
      else{
        this.formNotFilled=false;
      }
    });
  }

  listScreen() {
    this.router.navigate(['bookingmainpage']);
  }

  addPassengers() {
    const dummypassenger = {
      name: '',
      gender: '',
      age: 0,
      mealsType: ''
    }
    this.bookingdetails.totalPassengers = this.bookingdetails.totalPassengers + 1;
    this.passengers.push(dummypassenger);
    this.amountCalcByMeals();
  }

  removePassengers(index: number) {
    this.passengers.splice(index, 1);
    this.bookingdetails.totalPassengers = this.bookingdetails.totalPassengers - 1;
    this.amountCalcByMeals();
  }

  amountCalc() {
    if (this.ticketType == "B") {
      this.bookingdetails.totalAmount = this.bookingdetails.totalPassengers * (this.flight.businessClassPrice);
    } else if (this.ticketType == "NB") {
      this.bookingdetails.totalAmount = this.bookingdetails.totalPassengers * (this.flight.nonBusinessClassPrice);
    }
  }
  amountCalcByMeals() {
    this.amountCalc();
    if (this.mealsType == "VEG") {
      this.bookingdetails.totalAmount = this.bookingdetails.totalAmount + (50 * this.bookingdetails.totalPassengers);
    } else if (this.mealsType == "NONVEG") {
      this.bookingdetails.totalAmount = this.bookingdetails.totalAmount + (100 * this.bookingdetails.totalPassengers);
    }
  }

  historyScreen() {
    this.router.navigate(['bookinglist']);
  }
}
