import { Routes } from '@angular/router';
import { RegisterComponent } from './features/auth/register/register.component';
import { SigninComponent } from './features/auth/signin/signin.component';
import { HomeComponent } from './features/surveys/home/home.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '', component: SigninComponent },
  { path: 'surveys', component: HomeComponent },
];
