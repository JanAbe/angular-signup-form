import { Component } from '@angular/core';
import {BannerComponent} from "../../components/banner/banner.component";
import {RegistrationFormComponent} from "../../components/registration-form/registration-form.component";

@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [
    BannerComponent,
    RegistrationFormComponent
  ],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.css'
})
export class RegistrationPageComponent {

}
