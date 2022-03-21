import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AirlineformComponent } from './airlineform/airlineform.component';
import { FormsModule } from '@angular/forms';
import { AirlinelistComponent } from './airlinelist/airlinelist.component';
import { RoutingModule } from './routing/routing.module';
import { FlightformComponent } from './flightform/flightform.component';
import { FlightlistComponent } from './flightlist/flightlist.component';
import { AirportlistComponent } from './airportlist/airportlist.component';
import { AirportformComponent } from './airportform/airportform.component';
import { BookingformComponent } from './bookingform/bookingform.component';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { Bookingform2Component } from './bookingform2/bookingform2.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AirlineformComponent,
    AirlinelistComponent,
    FlightformComponent,
    FlightlistComponent,
    AirportlistComponent,
    AirportformComponent,
    BookingformComponent,
    BookinglistComponent,
    Bookingform2Component,
    LoginComponent,
    RegisterComponent,
    BookingDetailsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
