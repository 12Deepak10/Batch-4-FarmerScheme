import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Farmer } from './farmer';
import { Observable } from 'rxjs';
import { Status } from "./status";
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
}
