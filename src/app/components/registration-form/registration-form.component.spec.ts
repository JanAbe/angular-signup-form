import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormComponent } from './registration-form.component';

describe('RegistrationFormComponent', () => {
  let component: RegistrationFormComponent;
  let fixture: ComponentFixture<RegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initially be an empty form', () => {
    const registrationForm = component.registrationForm;
    const emptyForm = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
    expect(registrationForm.value).toEqual(emptyForm);
  });

  it('should show an error when firstName is left empty', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector("[data-test-id='firstNameError']")).toBeFalsy();
    // vind het input element en focus hem
    const firstNameElement = compiled.querySelector('#firstName') as HTMLInputElement;
    firstNameElement.focus();
    fixture.detectChanges(); // waarom is dit nodig

    // ga naar een ander input element om de error class te triggeren
    const lastNameElement = compiled.querySelector('#lastName') as HTMLInputElement;
    lastNameElement.focus();
    fixture.detectChanges(); // waarom is dit nodig

    // bekijk of de firstName error aanwezig is
    expect(compiled.querySelector("[data-test-id='firstNameError']")?.textContent).toContain("Is required");
  });

  it('should not show an error when firstName has a value', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    // focus on first name input field
    const firstNameElement = compiled.querySelector('#firstName') as HTMLInputElement;
    firstNameElement.focus();
    fixture.detectChanges();

    // focus on last name input field to trigger error on 'first name input field'.
    const lastNameElement = compiled.querySelector('#lastName') as HTMLInputElement;
    lastNameElement.focus();
    fixture.detectChanges();

    // check if the error is present
    expect(compiled.querySelector("[data-test-id='firstNameError']")).toBeTruthy();

    // give the first name a value
    firstNameElement.value = 'fred';
    firstNameElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // check if the error is not present anymore
    expect(compiled.querySelector("[data-test-id='firstNameError']")).toBeFalsy();
  });

  it('should validate a password correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const passwordElement = compiled.querySelector('#password') as HTMLInputElement;

    passwordElement.value = ' '; // invalid password
    passwordElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(compiled.querySelector("[data-test-id='lowercase-unchecked-circle']")).toBeTruthy();
    expect(compiled.querySelector("[data-test-id='uppercase-unchecked-circle']")).toBeTruthy();
    expect(compiled.querySelector("[data-test-id='number-unchecked-circle']")).toBeTruthy();
    expect(compiled.querySelector("[data-test-id='min-length-unchecked-circle']")).toBeTruthy();

    expect(passwordElement?.classList.contains('invalid')).toBeTruthy();
  });

  it('should show checkmarks if password is valid', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const passwordElement = compiled.querySelector('#password') as HTMLInputElement;
    const firstNameElement = compiled.querySelector('#firstName') as HTMLInputElement;

    passwordElement.value = 'Fr3d1234'; // valid password
    passwordElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(compiled.querySelector("[data-test-id='lowercase-checked-circle']")).toBeTruthy();
    expect(compiled.querySelector("[data-test-id='uppercase-checked-circle']")).toBeTruthy();
    expect(compiled.querySelector("[data-test-id='number-checked-circle']")).toBeTruthy();
    expect(compiled.querySelector("[data-test-id='min-length-checked-circle']")).toBeTruthy();

    expect(passwordElement?.classList.contains('invalid')).toBeFalsy();
  });

  it('should capitalize firstName after blur', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const firstNameElement = compiled.querySelector('#firstName') as HTMLInputElement;
    firstNameElement.focus();
    firstNameElement.value = "fred";
    firstNameElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const lastNameElement = compiled.querySelector('#lastName') as HTMLInputElement;
    lastNameElement.focus();

    expect(component.registrationForm.controls.firstName.value).toEqual("Fred");
  });

  it('should enable the button if all fields are valid', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const submitButtonElement = compiled.querySelector('.submit-button') as HTMLButtonElement;
    const firstNameElement = compiled.querySelector('#firstName') as HTMLInputElement;
    const lastNameElement = compiled.querySelector('#lastName') as HTMLInputElement;
    const emailElement = compiled.querySelector('#email') as HTMLInputElement;
    const passwordElement = compiled.querySelector('#password') as HTMLInputElement;

    firstNameElement.value = "fred";
    firstNameElement.dispatchEvent(new Event('input'));

    lastNameElement.value = "vis";
    lastNameElement.dispatchEvent(new Event('input'));

    emailElement.value = "fred@example.com";
    emailElement.dispatchEvent(new Event('input'));

    passwordElement.value = "Fr3d1234";
    passwordElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(component.registrationForm.valid).toBeTruthy();
    expect(submitButtonElement.disabled).toBeFalsy();
  });

  it('should call submit() when submit button is pressed', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const spy = spyOn(component, 'onSubmit');

    const submitButtonElement = compiled.querySelector('.submit-button') as HTMLButtonElement;
    const firstNameElement = compiled.querySelector('#firstName') as HTMLInputElement;
    const lastNameElement = compiled.querySelector('#lastName') as HTMLInputElement;
    const emailElement = compiled.querySelector('#email') as HTMLInputElement;
    const passwordElement = compiled.querySelector('#password') as HTMLInputElement;

    firstNameElement.value = "fred";
    firstNameElement.dispatchEvent(new Event('input'));

    lastNameElement.value = "vis";
    lastNameElement.dispatchEvent(new Event('input'));

    emailElement.value = "fred@example.com";
    emailElement.dispatchEvent(new Event('input'));

    passwordElement.value = "Fr3d1234";
    passwordElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    submitButtonElement.click();

    expect(spy).toHaveBeenCalled();
  });
});
