import { Component } from '@angular/core';
import { CreateSurveyComponent } from "../create-survey/create-survey.component";

@Component({
  selector: 'app-home',
  imports: [CreateSurveyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
