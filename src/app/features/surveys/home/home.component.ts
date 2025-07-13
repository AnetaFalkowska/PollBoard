import { Component } from '@angular/core';
import { SurveyIndexComponent } from '../survey-index/survey-index.component';
import { RouterOutlet } from '@angular/router';
import { SurveyCreateComponent } from '../survey-create/survey-create.component';

@Component({
  selector: 'app-home',
  imports: [SurveyCreateComponent, SurveyIndexComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
