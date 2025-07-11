import { Component, Input } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { InputComponent } from '../../../shared/input/input.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent {
  authForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get emailControl() {
    return this.authForm.get('email') as FormControl;
  }

  get passwordControl() {
    return this.authForm.get('password') as FormControl;
  }

  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }

    const { email, password } = this.authForm.value;

    this.authService.login({ email, password }).subscribe(() => {
      console.log('signed in');
      this.router.navigateByUrl('/surveys');
    });
  }
}
