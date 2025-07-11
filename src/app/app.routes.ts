import { Routes } from '@angular/router';
import { RegisterComponent } from './features/auth/register/register.component';
import { SigninComponent } from './features/auth/signin/signin.component';
import { HomeComponent } from './features/surveys/home/home.component';
import { SignoutComponent } from './features/auth/signout/signout.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '', component: SigninComponent },
  { path: 'singnout', component: SignoutComponent },
  { path: 'surveys', component: HomeComponent },
];
