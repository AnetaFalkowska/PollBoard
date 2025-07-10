import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../core/auth/auth.service';
import { InputComponent } from "../../../shared/input/input.component";
import { ButtonComponent } from "../../../shared/button/button.component";

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  authForm!: FormGroup;

  constructor(private authService: AuthService) {}

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

    this.authService
      .register(this.authForm.value)
      .subscribe(() => console.log('User registered successfully!'));
  }
}
