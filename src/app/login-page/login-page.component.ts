import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { SharedLoginService } from '../shared-login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private sharedLoginService: SharedLoginService
  ) {}

  onSubmit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'response' as 'response',
    };

    this.http
      .post<{ user: any }>(
        'http://localhost:9090/api/login',
        { email: this.email, password: this.password },
        httpOptions
      )
      .subscribe((user: any) => {
        sessionStorage.setItem('userId', user.body?._id);
        sessionStorage.setItem('token', user.body?.token);
        sessionStorage.setItem('userEmail', user.body?.email);

        this.sharedLoginService.emitChange(true);
        this.router.navigate(['/events']);
      });
  }
}
