import {Component, input, Input, signal} from '@angular/core';
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
  flag = input<any>()
}
