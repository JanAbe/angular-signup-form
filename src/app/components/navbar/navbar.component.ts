import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  switchLanguage(language: string): void {
    const url = window.location.href.replace(/(\/nl|\/en-US)/, `/${language}`);
    window.location.href = url;
  }
}
