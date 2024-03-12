import { Routes } from '@angular/router';
import {FlagsComponent} from "./flags/flags.component";
import {FlagsDetailsComponent} from "./flags/flags-details/flags-details.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component:FlagsComponent
  },
  { path: 'flag', component: FlagsDetailsComponent },
];
