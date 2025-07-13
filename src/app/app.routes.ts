import { Routes } from '@angular/router';
import { RegisterComponent } from './features/auth/register/register.component';
import { SigninComponent } from './features/auth/signin/signin.component';
import { HomeComponent } from './features/surveys/home/home.component';
import { SignoutComponent } from './features/auth/signout/signout.component';
import { SurveyDisplayComponent } from './features/surveys/survey-display/survey-display.component';
import { SurveyCreateComponent } from './features/surveys/survey-create/survey-create.component';
import { FormComponent } from './features/surveys/form/form.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '', component: SigninComponent },
  { path: 'signout', component: SignoutComponent },
  {
    path: 'surveys',
    component: HomeComponent,
    children: [{ path: ':id', component: SurveyDisplayComponent }],
  },
  { path: 'create', component: FormComponent },
];
