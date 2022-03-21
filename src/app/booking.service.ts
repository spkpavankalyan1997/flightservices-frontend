import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BOOKING_URL ="http://localhost:8081/bookings"
@Injectable({
  providedIn: 'root'
})

export class BookingService {
  cancelbookings(pnr: number) {
    return this.http.put(BOOKING_URL+"/cancel/"+pnr,pnr);
  }
  getbookings(userid: number) {
   return this.http.get(BOOKING_URL+"/byuserid/"+userid);
  }

  getBookingsByPnr(pnr: number) {
    return this.http.get(BOOKING_URL+"/bypnr/"+pnr);
   }

  constructor(public http:HttpClient) { }
}
