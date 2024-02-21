import { Routes } from '@angular/router';
import {RegistrationPageComponent} from "./pages/registration-page/registration-page.component";
import {SuccessPageComponent} from "./pages/success-page/success-page.component";
import {NotFoundPageComponent} from "./pages/not-found-page/not-found-page.component";

export const routes: Routes = [
  { path: '', component: RegistrationPageComponent },
  { path: 'success', component: SuccessPageComponent },
  { path: '**', component: NotFoundPageComponent }
];
