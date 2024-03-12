import {Component, input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CountryInfo} from "../../../shared/models/country.model";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-flags-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flags-list.component.html',
  styleUrl: './flags-list.component.scss'
})
export class FlagsListComponent {
  flag = input<CountryInfo[] | undefined>()

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  navigateDetails(flag: CountryInfo) {
    const {population, region, subregion, capital, borders, languages, currencies, flags} = flag;
    const currency = Object.values(Object.values(currencies)[0]);
    this.router.navigate(['/flag'], {
      queryParams: {
        name: flag.name.common,
        population,
        region,
        subregion,
        capital,
        borders,
        language: Object.values(languages),
        currencies: Object.values(currency),
        url: flags.png
      }
    });
  }
}
