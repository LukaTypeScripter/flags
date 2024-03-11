import {Component, EventEmitter, Output} from '@angular/core';
import {ThemeServiceService} from "../../../service/theme-service.service";
import { CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CampaignService} from "../../../service/campaign.service";
import {debounceTime, distinctUntilChanged, map, takeUntil} from "rxjs";
import {unsub} from "../../unsub.class";

@Component({
  selector: 'app-flags-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './flags-search.component.html',
  styleUrl: './flags-search.component.scss'
})
export class FlagsSearchComponent extends unsub{
  input:string = ''
  selectedRegion:string = ''
  @Output() inputValue = new EventEmitter<any>();
  constructor(public themeService: ThemeServiceService,public campaignService: CampaignService) {
    super();
    this.listenInput();
  }
  listenInput() {
    this.campaignService.$search.pipe(debounceTime(500),distinctUntilChanged(),map((_) => {
        const searchTerm: string = this.input.trim();
        this.inputValue.emit([searchTerm,'name']);
    }),takeUntil(this.unsubscribe$)).subscribe()
  }
  search() {
    const searchTerm: string = this.input;
    this.campaignService.$search.next(searchTerm);
  }
  onRegionChange() {
    const searchRegion: string = this.selectedRegion;
    this.inputValue.emit([searchRegion,'region']);
  }
}
