import {Component, EventEmitter, Inject, Output} from '@angular/core';
import {Observable} from "rxjs";
import {ThemeServiceService} from "../../../service/theme-service.service";
import {AsyncPipe, CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

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
export class FlagsSearchComponent {
  input:string = ''
  @Output() inputValue = new EventEmitter<string>();
  constructor(public themeService: ThemeServiceService) {
  }

  search() {

    const searchTerm: string = this.input;
    this.inputValue.emit(searchTerm);
  }
}
