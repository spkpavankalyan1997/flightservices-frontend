import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../booking.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  bookingdetails: any;
  isLoggedIn = false;
  pnr!: number;
  constructor(public router: Router, public bookingService: BookingService, public tokenStorageService: TokenStorageService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.pnr = this.route.snapshot.params['pnr'];
    const observable = this.bookingService.getBookingsByPnr(this.pnr);
    observable.subscribe(response => {
      this.bookingdetails = response;
    })
  }

  showbookingslist()
  {
    this.router.navigate(['bookinglist']);
  }

}
