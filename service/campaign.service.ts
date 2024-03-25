import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable, Subject} from "rxjs";
import {CountryInfo} from "../shared/models/country.model";

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  $search = new Subject()
  skeleton = new BehaviorSubject(false)
  borderChange = new BehaviorSubject('')
  constructor(private http:HttpClient) { }

  getFlags(fillterType: string,filterFrom:string): Observable<CountryInfo> {
    return this.http.get(`https://restcountries.com/v3.1${fillterType ?  `/${filterFrom}/` + fillterType : '//' + 'all' }`).pipe(
      map((res: any) => res as CountryInfo)
    );
  }
}
