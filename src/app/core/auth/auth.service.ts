import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, throwError } from 'rxjs';

export interface UserCredentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'http://localhost:3000/auth/';

  constructor(private http: HttpClient) {}

  register(credentials: UserCredentials) {
    return this.http.post(this.url + 'register', credentials).pipe(
      catchError((err) => {
        console.error(err);
        return of(null);
      })
    );
  }
}
