import { Component } from '@angular/core';
import {NgClass, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgClass
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  show = false;

  toggleList(): void {
    this.show = !this.show;
  }

  switchLanguage(language: string): void {
    const url = window.location.href.replace(/(\/nl|\/en-US)/, `/${language}`);
    window.location.href = url;
  }
}
