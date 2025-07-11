import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';

export interface Survey {
  question: string;
  options: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   url = 'http://localhost:3000/polls/';

  constructor(private http: HttpClient, private authService: AuthService) {}


  createSurvey(survey:Survey) {
    return this.http.post<Survey>(this.url, survey).pipe(catchError((err)=> {if (err.error.error === "Invalid token") {this.authService.setLogout()}; return throwError(() => err)}));
  }
}
