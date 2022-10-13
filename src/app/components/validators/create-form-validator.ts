import { AbstractControl, FormControl, ValidatorFn } from "@angular/forms";

export class CreateFormValidator {

  static match(controlValue: string, matchingControl: string): ValidatorFn {
    return (group: AbstractControl) => {
      const controlName = group.get(controlValue);
      const matchingControlName = group.get(matchingControl);

      if (!controlName || !matchingControlName) {
        console.error('Control cannot be found on form group');
        return { controlNotFound: true }
      }

      const error = controlName.value === matchingControlName.value ? null : { noMatch: true }
      matchingControlName.setErrors(error);
      return error;
    }
  }

  static checkPasswordStrength(): ValidatorFn {
    return (control: AbstractControl) => {
      const value = control.value;
      return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value) ? null : { passwordStrength: true };
    }
  }
}
