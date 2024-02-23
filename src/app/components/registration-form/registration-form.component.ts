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
import {UserService} from "../../user.service";
import {User} from "../../model";
import {ToastrService} from "ngx-toastr";

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
    password: ['', [Validators.required, CustomValidators.minLength(8), CustomValidators.strongPassword()]],
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService, private toastr: ToastrService) {}

  onSubmit(): void {
    this.isLoading = true;
    if (this.registrationForm.invalid) {
      return;
    }

    const user: User = {
      firstName: this.registrationForm.value.firstName!,
      lastName: this.registrationForm.value.lastName!,
      email: this.registrationForm.value.email!,
      password: this.registrationForm.value.password!,
    }

    this.userService.createUser(user).subscribe({
      next: (createdUser) => {
        console.log(createdUser);
        this.router.navigateByUrl('/success');
        this.toastr.success('Account successfully registered', '', {
          timeOut: 5000
        });
      },
      error: (error) => {
        this.toastr.error('Error creating an account');
      }
    }).add(() => {
      this.isLoading = false;
    })
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
