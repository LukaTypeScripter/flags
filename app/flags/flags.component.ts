import { Component } from '@angular/core';
import {FlagsHeaderComponent} from "./flags-header/flags-header.component";
import {FlagsSearchComponent} from "./flags-search/flags-search.component";
import {FlagsListComponent} from "./flags-list/flags-list.component";

@Component({
  selector: 'app-flags',
  standalone: true,
  imports: [
    FlagsHeaderComponent,
    FlagsSearchComponent,
    FlagsListComponent
  ],
  templateUrl: './flags.component.html',
  styleUrl: './flags.component.scss'
})
export class FlagsComponent {

}
