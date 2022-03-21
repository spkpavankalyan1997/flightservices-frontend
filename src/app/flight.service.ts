import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = "http://localhost:8081/flights";
const BOOKING_URL = "http://localhost:8081/bookings"
@Injectable({
  providedIn: 'root'
})
export class FlightService {
  checkFlightUsability(id: number): any {
    return this.http.get(BOOKING_URL + "/isflightusing/" + id);
  }
  getSearchedFlights(fromPlace: any, toPlace: any, selectedDate: Time): any {
    return this.http.get(BASE_URL + "/searchedflights?" + "from=" + fromPlace + "&to=" + toPlace + "&date=" + selectedDate);
  }
  createBooking(bookingdetails: { userID: number; totalAmount: number; flightID: number; fromPlace: string; toPlace: string; fromTime: string; toTime: string; status: string; totalPassengers: number; passengers: any[]; }) {
    return this.http.post(BOOKING_URL + "/book", bookingdetails);
  }
  updateFlight(flight: { airlineCode: string; fromCity: string; toCity: string; businessSeats: number; nonBusinessSeats: number; fromTime: string; toTime: string; businessClassPrice: number; NonBusinessClassPrice: number; noofRows: number; status: string; }) {
    return this.http.post(BASE_URL, flight);
  }

  getAllFlights(): any {
    return this.http.get(BASE_URL);
  }
  createFlight(flight: { airlineCode: string; fromCity: string; toCity: string; businessSeats: number; nonBusinessSeats: number; fromTime: string; toTime: string; businessClassPrice: number; nonBusinessClassPrice: number; noofRows: number; status: string; }) {
    return this.http.post(BASE_URL, flight);
  }

  deleteFlight(id: number) {
    return this.http.delete(BASE_URL + "/" + id);
  }

  getFlight(id: number): any {
    return this.http.get(BASE_URL + "/" + id);
  }

  constructor(public http: HttpClient) { }
}
