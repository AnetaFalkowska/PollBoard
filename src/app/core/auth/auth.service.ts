import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface RegisterCredentials {
  email: string, password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://localhost:3000/auth/"

  constructor(private http:HttpClient) { }

  register(credentials:RegisterCredentials) {
    return this.http.post(this.url + 'register', credentials);
  }
}
