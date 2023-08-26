import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './types';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<{ users: User[] }>(
      'http://localhost:9090/api/users',
      this.getHttpOptions()
    );
  }

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': sessionStorage.getItem('token') + '',
      }),
    };
  }
}
