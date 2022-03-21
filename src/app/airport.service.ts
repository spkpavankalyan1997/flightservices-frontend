import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = "http://localhost:8081/airports";
@Injectable({
  providedIn: 'root'
})
export class AirportService {

  saveAirport(airport: { code: string; name: string }) {
    return this.http.post(BASE_URL, airport);
  }

  deleteAirport(id: number) {
    return this.http.delete(BASE_URL + "/" + id);
  }

  getAirports(): any {
    return this.http.get(BASE_URL);
  }


  constructor(public http: HttpClient) { }
}
