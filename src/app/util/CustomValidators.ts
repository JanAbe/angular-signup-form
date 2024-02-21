import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  public static strongPassword(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      const hasUpperCase = /[A-Z]+/.test(value);
      const hasLowerCase = /[a-z]+/.test(value);
      const hasNumber = /[0-9]+/.test(value);

      const isStrongPassword = hasUpperCase && hasLowerCase && hasNumber;

      return isStrongPassword
        ? null
        : {
            isStrongPassword: {
              hasUpperCase,
              hasLowerCase,
              hasNumber,
            },
          };
    };
  }
}
