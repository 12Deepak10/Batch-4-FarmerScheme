import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Farmer } from './farmer';
import { Observable } from 'rxjs';
import { Status } from "./status";
import { cropdto } from './crop-dto';
import { MarketDto } from './market-dto';
import { Crop } from './crop';
// import { cropdto } from './cropdto';
@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  constructor(private http:HttpClient) { }

  register(farmer:Farmer):Observable<Status>{
    console.log(farmer.aadharNo);
    
    let url='http://localhost:9090/registerFarmer';
    return this.http.post<Status>(url,farmer);
  }
  getFarmerList():Observable<Farmer[]>
  {
    let url='http://localhost:9090/viewAllFarmer';
    return this.http.get<Farmer[]>(url);
  }
  sellCrop(crop:Crop):Observable<Status>{
    console.log("Sent");
    
    let url='http://localhost:9090/placeSellRequest';
    return this.http.post<Status>(url,crop);
    
  }
  marketPlace():Observable<MarketDto[]>
  {
    let url='http://localhost:9090/marketPlace';
    return this.http.get<MarketDto[]>(url);
  }

}
