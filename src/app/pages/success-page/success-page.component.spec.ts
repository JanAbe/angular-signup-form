import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessPageComponent } from './success-page.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('SuccessPageComponent', () => {
  let component: SuccessPageComponent;
  let fixture: ComponentFixture<SuccessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessPageComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toContain('Thank you for registering');
  });

  it('should render thank you text', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('.text').item(0).textContent).toContain('We sent a validation link to your email. Please click the link provided in the email to validate your account!');
    expect(compiled.querySelectorAll('.text').item(1).textContent).toContain('We hope you enjoy your time on the streaming platform!');
  });

  it('should go to home when link is pressed', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.button')?.getAttribute('routerLink')).toEqual('/');
  });
});
