import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BookingService } from '../booking.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.css']
})
export class BookinglistComponent implements OnInit {
  isLoggedIn = false;
  pnr!: number;
  userid!: number;
  bookingslist: any[] = [];
  errormessage = '';
  constructor(public router: Router, public tokenStorageService: TokenStorageService, public bookingservice: BookingService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.userid = user.id;
    }

  }

  cancelBooking(pnr: number) {

    const observable = this.bookingservice.cancelbookings(pnr);
    observable.subscribe((response: any) => {
    },
      function (error) {
        alert('something went wrong. Please try again.')
      });
    this.reload();
  }

  reload() {
    window.location.reload();
  }

  showBookingDetails(pnr: number) {
    this.router.navigate(['bookingdetails', pnr]);
  }

  showBooking() {
    this.bookingslist = [];
    const observable = this.bookingservice.getBookingsByPnr(this.pnr);
    observable.subscribe((response: any) => {
      this.bookingslist.push(response);
    },
      err => {
        this.errormessage = err.error.message;
      }
    );
  }

  showBookingList() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.userid = user.id;
      this.bookingservice.getbookings(this.userid).subscribe((response: any) => {
        console.log(response);
        this.bookingslist = response;
      })
    }

  }

}
