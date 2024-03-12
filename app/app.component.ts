import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FlagsComponent} from "./flags/flags.component";
import {FlagsHeaderComponent} from "./flags/flags-header/flags-header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FlagsComponent, FlagsHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'search-flags';
}
