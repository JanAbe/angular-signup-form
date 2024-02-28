import { Component } from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgClass,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  show = false;
  selectedLanguage = this.getLanguageFromURL();

  getLanguageFromURL(): string {
    const url = window.location.pathname;
    const paths = url.split('/');
    return paths.filter(content => content !== "")[0];
  }

  toggleList(): void {
    this.show = !this.show;
  }

  switchLanguage(language: string): void {
    this.selectedLanguage = language;
    const url = window.location.href.replace(/(\/nl|\/en-US)/, `/${language}`);
    window.location.href = url;
  }
}
