import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor(private http:HttpClient) { }
  getFlags() {
    return this.http.get("https://restcountries.com/v3.1//all").pipe(map((res) => {
      return res
    }))
  }
}
