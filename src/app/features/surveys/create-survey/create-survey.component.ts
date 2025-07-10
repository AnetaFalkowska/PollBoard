import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-create-survey',
  imports: [ReactiveFormsModule],
  templateUrl: './create-survey.component.html',
  styleUrl: './create-survey.component.scss',
})
export class CreateSurveyComponent {
  constructor(private apiService: ApiService) {}

  createSurvey() {
    const survay = {
      question: 'What is your favorite color?',
      options: ['Red', 'Blue', 'Green'],
    };
    this.apiService.createSurvey(survay).subscribe({
      next: (response) => {
        console.log('Survey created successfully:', response);
      },
    });
  }
}
