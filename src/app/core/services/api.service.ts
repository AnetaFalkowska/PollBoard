import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Survey {
  question: string;
  options: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   url = 'http://localhost:3000/polls/';

  constructor(private http: HttpClient) {}


  createSurvey(survey:Survey) {
    return this.http.post<Survey>(this.url, survey);
  }
}
