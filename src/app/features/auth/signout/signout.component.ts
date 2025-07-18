import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout',
  imports: [],
  templateUrl: './signout.component.html',
  styleUrl: './signout.component.scss'
})
export class SignoutComponent implements OnInit {

constructor(private authService: AuthService, private router: Router) {
}

ngOnInit(): void {
this.authService.setLogout()
  setTimeout(() => {this.router.navigateByUrl('/');}, 1000);
}

}
