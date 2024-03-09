import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor(private http:HttpClient) { }

  getFlags(fillterType: string | undefined) {
    return this.http.get(`https://restcountries.com/v3.1${fillterType ? '/name/' +fillterType : '//' +'all' }`).pipe(map((res) => {
      return res
    }))
  }
}
