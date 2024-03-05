import {Component, Inject, OnInit} from '@angular/core';
import {ThemeServiceService} from "../../../service/theme-service.service";
import {CommonModule, NgClass} from "@angular/common";
import {map, Observable, of} from "rxjs";

@Component({
  selector: 'app-flags-header',
  standalone: true,
  imports: [
  CommonModule
  ],
  templateUrl: './flags-header.component.html',
  styleUrl: './flags-header.component.scss'
})
export class FlagsHeaderComponent{
  isDarkMode$!:Observable<boolean>;
  constructor(private themeService: ThemeServiceService) {
    this.isDarkMode$ = this.themeService.$isDarkMode;
  }
  toggleMode() {
    this.themeService.toggleDarkMode();
  }
}
