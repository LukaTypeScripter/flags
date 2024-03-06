import {Component, Inject} from '@angular/core';
import {Observable} from "rxjs";
import {ThemeServiceService} from "../../../service/theme-service.service";
import {AsyncPipe, CommonModule} from "@angular/common";

@Component({
  selector: 'app-flags-search',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './flags-search.component.html',
  styleUrl: './flags-search.component.scss'
})
export class FlagsSearchComponent {

  constructor(public themeService: ThemeServiceService) {
  }
}
