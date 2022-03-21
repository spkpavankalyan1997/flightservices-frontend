import { Time } from "@angular/common";

export interface Flight{
    id:number;
    airlineCode:string;
    fromCity:string;
    toCity:string;
    businessSeats:number;
    nonBusinessSeats:number;
    fromTime:Time;
    toTime:Time;
    businessClassPrice:number;
    NonBusinessClassPrice:number;
    noofRows:number;
    status:string;
    notUpdatable:boolean;
}