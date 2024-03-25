import { Component, ChangeDetectorRef } from '@angular/core';
import { FlagsHeaderComponent } from './flags-header/flags-header.component';
import { FlagsSearchComponent } from './flags-search/flags-search.component';
import { FlagsListComponent } from './flags-list/flags-list.component';
import {catchError, map, Observable, of, switchMap, takeUntil} from 'rxjs';
import { CampaignService } from '../../service/campaign.service';
import { CommonModule } from '@angular/common';
import {SkeletonComponent} from "./skeleton/skeleton.component";
import {CountryInfo} from "../../shared/models/country.model";
import {unsub} from "../unsub.class";


@Component({
  selector: 'app-flags',
  standalone: true,
  imports: [FlagsHeaderComponent, FlagsSearchComponent, FlagsListComponent, CommonModule, SkeletonComponent],
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.scss'],
})
export class FlagsComponent extends unsub{
  flags$!: Observable<CountryInfo[]>;
  skeleton: Observable<boolean> = this.campaignService.skeleton.asObservable();
  isError: boolean = false;
  constructor(private campaignService: CampaignService) {
    super()
    this.getFlags();


  }

  getFlags(e:string[] = ['//','all'] ) {
    this.campaignService.skeleton.next(true);
      this.flags$ = this.campaignService.getFlags(e[0], e[1]).pipe(
        switchMap((res: CountryInfo) => {
          console.log(res)
          this.campaignService.skeleton.next(false);
          this.isError = false
          return of(Object.values(res));
        }),
        catchError((error: string) => {
          this.campaignService.skeleton.next(false);
          this.isError = true
          return of([]);
        })
      );
    }
}
