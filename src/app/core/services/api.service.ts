import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';

export interface SurveyFormData {
  id: string;
  title: string;
  questions: { text: string; options: string[] }[];
}

export interface SurveyFromApi {
  id: string;
  userId: string;
  title: string;
  questions: Question[];
  createdAt: string;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
}

export interface Option {
  id: string;
  text: string;
  votes: number;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'http://localhost:3000/polls/';

  constructor(private http: HttpClient, private authService: AuthService) {}

  createSurvey(survey: SurveyFormData) {
    return this.http.post<SurveyFormData>(this.url, survey).pipe(
      catchError((err) => {
        if (err.error.error === 'Invalid token') {
          this.authService.setLogout();
        }
        return throwError(() => err);
      })
    );
  }

  getMySurveys(): Observable<SurveyFromApi[]> {
    const userId = this.authService.getUserId();
    return this.http.get<SurveyFromApi[]>(this.url).pipe(
      catchError((err) => {
        if (err.error.error === 'Invalid token') {
          this.authService.setLogout();
        }
        return throwError(() => err);
      })
    );
  }
}
