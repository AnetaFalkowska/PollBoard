import { Component, OnInit } from '@angular/core';
import { ApiService, SurveyFromApi } from '../../../core/services/api.service';

@Component({
  selector: 'app-survey-index',
  imports: [],
  templateUrl: './survey-index.component.html',
  styleUrl: './survey-index.component.scss'
})
export class SurveyIndexComponent implements OnInit {
  surveys: SurveyFromApi[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getMySurveys().subscribe((data)=>{this.surveys = data})
 
  }
}
