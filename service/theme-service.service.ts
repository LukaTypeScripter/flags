import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {
  private isDarkMode = new BehaviorSubject<boolean>(false);
  $isDarkMode = this.isDarkMode.asObservable();
  toggleDarkMode() {
    const currentMode = this.isDarkMode.value;
    document.documentElement.setAttribute('data-theme', currentMode ? 'light' : 'dark');
    this.isDarkMode.next(!currentMode);
  }
}
