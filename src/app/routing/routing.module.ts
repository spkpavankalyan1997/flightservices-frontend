import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirlineformComponent } from '../airlineform/airlineform.component';
import { RouterModule, Routes } from '@angular/router';
import { AirlinelistComponent } from '../airlinelist/airlinelist.component';
import { FlightformComponent } from '../flightform/flightform.component';
import { AirportlistComponent } from '../airportlist/airportlist.component';
import { AirportformComponent } from '../airportform/airportform.component';
import { BookingformComponent } from '../bookingform/bookingform.component';
import { Bookingform2Component } from '../bookingform2/bookingform2.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { BookinglistComponent } from '../bookinglist/bookinglist.component';
import { BookingDetailsComponent } from '../booking-details/booking-details.component';

const routes: Routes = [
  { path: 'airline', component: AirlineformComponent },
  { path: 'airlines', component: AirlinelistComponent },
  { path: 'flight', component: FlightformComponent },
  { path: 'airport', component: AirportformComponent },
  { path: 'airports', component: AirportlistComponent },
  { path: 'bookingmainpage', component: BookingformComponent },
  { path: 'bookingform/:id', component: Bookingform2Component },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'bookinglist', component: BookinglistComponent },
  { path: 'login', component: LoginComponent },
  { path: 'bookingdetails/:pnr', component: BookingDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
