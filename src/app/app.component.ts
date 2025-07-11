import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from './core/auth/auth.service';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    RouterLink,
    AsyncPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'PollBoard';
  isLoggedin$!: BehaviorSubject<boolean>;

  constructor(private authService: AuthService) {
    this.isLoggedin$ = this.authService.loggedIn$;
  }
}
