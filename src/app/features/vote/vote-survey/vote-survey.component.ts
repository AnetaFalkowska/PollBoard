import { Component, OnInit } from '@angular/core';
import { ApiService, SurveyFromApi } from '../../../core/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vote-survey',
  imports: [FormsModule],
  templateUrl: './vote-survey.component.html',
  styleUrl: './vote-survey.component.scss',
})
export class VoteSurveyComponent implements OnInit {

 survey?: SurveyFromApi
 answers: { [questionId: string]: string } = {};

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params) => {
        const id = params['id'];
        return this.apiService.getSurvey(id);
      })
    ).subscribe((survey) => {this.survey = survey;});
  }

  saveAnswers() {
    const surveyId = this.survey?.id;
    localStorage.setItem(`vote-${surveyId}`, JSON.stringify(this.answers));
    this.router.navigate([`/vote/${surveyId}/confirm`]);
  }
}
