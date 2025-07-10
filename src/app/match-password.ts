import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, Validator } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class MatchPassword implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const group = control as FormGroup;
    const { password, passwordConfirmation } = group.value;

    return password === passwordConfirmation ? null : { passwordMismatch: true };
  }
}
