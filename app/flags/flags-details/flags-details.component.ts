import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, Observable} from "rxjs";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-flags-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flags-details.component.html',
  styleUrl: './flags-details.component.scss'
})
export class FlagsDetailsComponent {
  specificFlag$!:Observable<any>
  constructor(route: ActivatedRoute) {
     this.specificFlag$  = route.queryParams.pipe(map((res) => {
       return res;
     }))
  }
}
