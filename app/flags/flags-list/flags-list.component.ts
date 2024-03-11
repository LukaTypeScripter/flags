import {Component, input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CountryInfo} from "../../../shared/models/country.model";

@Component({
  selector: 'app-flags-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flags-list.component.html',
  styleUrl: './flags-list.component.scss'
})
export class FlagsListComponent {
  flag = input<CountryInfo[] | undefined>()
}
