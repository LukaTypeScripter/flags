import { Component } from '@angular/core';
import {CampaignService} from "../../../service/campaign.service";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-flags-list',
  standalone: true,
  imports: [],
  templateUrl: './flags-list.component.html',
  styleUrl: './flags-list.component.scss'
})
export class FlagsListComponent {
  flags$!:Observable<any>
  constructor(private campaignService: CampaignService) {
    this.getFlags()
  }

  getFlags() {
    this.flags$ = this.campaignService.getFlags().pipe(map((res) => res));
    this.flags$.subscribe((res) => {
      console.log(res)
    })
  }
}
