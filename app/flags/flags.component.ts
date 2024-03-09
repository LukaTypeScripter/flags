import { Component } from '@angular/core';
import {FlagsHeaderComponent} from "./flags-header/flags-header.component";
import {FlagsSearchComponent} from "./flags-search/flags-search.component";
import {FlagsListComponent} from "./flags-list/flags-list.component";
import { Observable, of, switchMap, throttleTime} from "rxjs";
import {CampaignService} from "../../service/campaign.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-flags',
  standalone: true,
  imports: [
    FlagsHeaderComponent,
    FlagsSearchComponent,
    FlagsListComponent,
    CommonModule
  ],
  templateUrl: './flags.component.html',
  styleUrl: './flags.component.scss'
})
export class FlagsComponent {
  flags$!:Observable<any>
  constructor(private campaignService: CampaignService) {
    this.getFlags()
  }

  getFlags(e?: string) {
    this.flags$ = this.campaignService.getFlags(e).pipe(
      switchMap((res: any) => {
        return of(Object.values(res));
      })
    );
  }

}
