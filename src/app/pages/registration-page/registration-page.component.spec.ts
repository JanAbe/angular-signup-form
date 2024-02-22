import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPageComponent } from './registration-page.component';

describe('RegistrationPageComponent', () => {
  let component: RegistrationPageComponent;
  let fixture: ComponentFixture<RegistrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Learn to code by watching others');
  });

  it('should render description', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('See how experienced developers solve problems');
  });

  it('should contain a banner', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    // null is niet truthy dus kan je .toBeTruthy() gebruiken (querySelector returned null als het element niet gevonden is)
    expect(compiled.querySelector('app-banner')).toBeTruthy();
  });

  it('should contain a registration form', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-registration-form')).toBeTruthy();
  });
});
