import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CustomValidators } from '../../util/CustomValidators';
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css',
})
export class RegistrationFormComponent {
  isLoading = false;
  registrationForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, CustomValidators.strongPassword()]],
  });

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  onSubmit(): void {
    this.isLoading = true;
    if (this.registrationForm.invalid) {
      return;
    }

    // todo: call httpService to make request to backend
    console.log(this.registrationForm.value);

    setTimeout(() => {
      this.router.navigateByUrl('/success');
      this.isLoading = false;
    }, 5000)

  }

  /**
   * Use for blur events
   * @param event blur event
   * @param field field name of the form control whose value you want to capitalize
   */
  capitalize(event: Event, field: string): void {
    const e = event.target as HTMLInputElement;
    const input = e.value;
    const capitalizedInput = input.charAt(0).toUpperCase() + input.slice(1);
    const formControl = this.registrationForm.get(field);
    formControl?.setValue(capitalizedInput);
  }
}
