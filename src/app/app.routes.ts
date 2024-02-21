import { Routes } from '@angular/router';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { SuccessPageComponent } from './pages/success-page/success-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export const routes: Routes = [
  { path: '', component: RegistrationPageComponent, title: 'Home | Registration Form' },
  { path: 'success', component: SuccessPageComponent, title: 'Succesfully registered'},
  { path: '**', component: NotFoundPageComponent, title: '404 Not Found' },
];
