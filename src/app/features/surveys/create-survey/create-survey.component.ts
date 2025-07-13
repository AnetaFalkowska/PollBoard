import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-create-survey',
  imports: [ReactiveFormsModule],
  templateUrl: './create-survey.component.html',
  styleUrl: './create-survey.component.scss',
})
export class CreateSurveyComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  surveyForm!: FormGroup;
  ngOnInit(): void {
    this.surveyForm = new FormGroup({
      title: new FormControl(''),
      questions: new FormArray([
        this.createQuestion(),
      ]),
    });
  }

  get questions(): FormArray {
    return this.surveyForm.get('questions') as FormArray;
  }

  getOptions(questionIndex: number): FormArray {
  return this.questions.at(questionIndex).get('options') as FormArray;
}

  createQuestion (): FormGroup {
    const options = new FormArray([new FormControl(''), new FormControl('')]);
    return new FormGroup({
      text: new FormControl(''),
      options: options,
    });
  }

  addQuestion(): void {
    this.questions.push(this.createQuestion());
  }

  addOption(questionIndex: number) {
    const options = this.questions
      .at(questionIndex)
      .get('options') as FormArray;
    options.push(new FormControl(''));
  }

  // removeQuestion(index: number): void {
  //   this.questions.removeAt(index);
  // }

  removeOption(questionIndex: number, optionIndex: number) {
    const options = this.getOptions(questionIndex);
    if (options.length > 2) {
      options.removeAt(optionIndex);
    } 
  }

  onSubmit() {
    const survey = this.surveyForm.value;

    this.apiService.createSurvey(survey).subscribe({
      next: (response) => {
        console.log('Survey created successfully:', response);
      },
    });
  }
}
