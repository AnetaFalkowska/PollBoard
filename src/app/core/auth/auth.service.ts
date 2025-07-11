import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, of, tap, throwError } from 'rxjs';

export interface UserCredentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'http://localhost:3000/auth/';
  loggedIn$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {
    this.loggedIn$.next(this.isTokenValid());
  }

  // todo - obsluga bledow

  isTokenValid():boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    try {
      const decodedToken:any = jwtDecode(token);
      const now = Math.floor(Date.now() / 1000);
      console.log(decodedToken.expiresIn, now)
      return decodedToken.expiresIn > now;
    } catch (error) {
      return false;
    }
  }

  setLogin(token:string) { 
    localStorage.setItem('token', token);
    this.loggedIn$.next(true);
  }

  setLogout() {
    localStorage.removeItem('token');
    this.loggedIn$.next(false);
    this.router.navigateByUrl('/');
  }

  register(credentials: UserCredentials) {
    return this.http.post(this.url + 'register', credentials).pipe(
      catchError((err) => {
        console.error(err);
        return of(null);
      })
    );
  }

  login(credentials: UserCredentials): Observable<{ token: string }> {
    return this.http
      .post<{ token: string }>(this.url + 'login', credentials)
      .pipe(
        tap((response) => {
          this.setLogin(response.token);
        })
      );
  }
}

function jwtDecode(token: string): any {
  throw new Error('Function not implemented.');
}

