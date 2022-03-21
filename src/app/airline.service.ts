import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = "http://localhost:8081/airlines/";
@Injectable({
  providedIn: 'root'
})
export class AirlineService {
  getAirlines(): any {
    return this.http.get(BASE_URL);
  }

  getAirline(id: number) {
    return this.http.get(BASE_URL + id);
  }

  deleteAirline(id: number) {
    return this.http.delete(BASE_URL + id)
  }

  blockAirline(id: number) {
    return this.http.get(BASE_URL + "block/" + id);
  }

  updateAirline(airline: { code: string; description: string; rating: number; status: string; instrument: string }) {
    return this.http.put(BASE_URL, airline);
  }

  createAirline(airline: { code: string; description: string; rating: number; status: string; instrument: string }) {
    return this.http.post(BASE_URL, airline);
  }

  getAllAirlineCodes() {
    return this.http.get(BASE_URL + "codes/");
  }
  constructor(public http: HttpClient) { }
}
