import { Component, ChangeDetectorRef } from '@angular/core';
import { FlagsHeaderComponent } from './flags-header/flags-header.component';
import { FlagsSearchComponent } from './flags-search/flags-search.component';
import { FlagsListComponent } from './flags-list/flags-list.component';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { CampaignService } from '../../service/campaign.service';
import { CommonModule } from '@angular/common';
import {SkeletonComponent} from "./skeleton/skeleton.component";
;

@Component({
  selector: 'app-flags',
  standalone: true,
  imports: [FlagsHeaderComponent, FlagsSearchComponent, FlagsListComponent, CommonModule, SkeletonComponent],
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.scss'],
})
export class FlagsComponent {
  flags$!: Observable<any>;
  skeleton: Observable<boolean> = this.campaignService.skeleton.asObservable();

  constructor(private campaignService: CampaignService, private cdr: ChangeDetectorRef) {
    this.getFlags();
  }

  getFlags(e?: string) {
    this.campaignService.skeleton.next(true);
    this.flags$ = this.campaignService.getFlags(e).pipe(
      switchMap((res: any) => {
        this.campaignService.skeleton.next(false);
        return of(Object.values(res));
      })
    );
  }
}
