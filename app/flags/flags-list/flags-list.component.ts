import { Component } from '@angular/core';
import {CampaignService} from "../../../service/campaign.service";
import {map, Observable} from "rxjs";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-flags-list',
  standalone: true,
  imports: [CommonModule],
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
  }
}
