import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {map, Observable} from "rxjs";
import {CommonModule} from "@angular/common";
import {CampaignService} from "../../../service/campaign.service";

@Component({
  selector: 'app-flags-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flags-details.component.html',
  styleUrl: './flags-details.component.scss'
})
export class FlagsDetailsComponent {
  specificFlag$!:Observable<any>
  constructor(private route: ActivatedRoute, private router: Router,private campaignService:CampaignService) {
     this.specificFlag$  = this.route.queryParams
  }

  goBack() {
    this.router.navigate(['/'])
  }
}
