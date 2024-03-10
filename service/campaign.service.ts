import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  $search = new Subject()
  skeleton = new BehaviorSubject(false)
  constructor(private http:HttpClient) { }

  getFlags(fillterType: string | undefined) {
    return this.http.get(`https://restcountries.com/v3.1${fillterType ? '/name/' +fillterType : '//' +'all' }`).pipe(map((res) => {
      return res
    }))
  }
}
