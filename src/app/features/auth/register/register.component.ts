import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../core/auth/auth.service';
import { InputComponent } from '../../../shared/input/input.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { MatchPassword } from '../../../match-password';
import { MatError } from '@angular/material/form-field';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent, MatError],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  authForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private matchPassword: MatchPassword,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        passwordConfirmation: new FormControl('', [Validators.required]),
      },
      { validators: this.matchPassword.validate.bind(this.matchPassword) }
    );
  }

  get emailControl() {
    return this.authForm.get('email') as FormControl;
  }

  get passwordControl() {
    return this.authForm.get('password') as FormControl;
  }

  get passwordConfirmation() {
    return this.authForm.get('passwordConfirmation') as FormControl;
  }

  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }

    const { email, password } = this.authForm.value;

    this.authService
      .register({ email, password })
      .subscribe({next:() => this.router.navigateByUrl('/')});
  }
}
