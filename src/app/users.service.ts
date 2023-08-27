import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './types';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  createUser(user: any) {
    const createBody = {
      username: user.username,
      email: user.email,
      password: user.password,
      image: user.image,
      role: user.role,
    };

    return this.http.post<{ user: User }>(
      'http://localhost:9090/api/register',
      createBody,
      this.getHttpOptions()
    );
  }

  getUsers() {
    return this.http.get<{ users: User[] }>(
      'http://localhost:9090/api/users',
      this.getHttpOptions()
    );
  }

  updateUser(user: any) {
    const updateBody = {
      username: user.username,
      email: user.email,
      password: user.password,
      image: user.image,
      events: user.events,
      tickets: user.tickets,
      role: user.role,
    };
    return this.http.patch<{ user: User }>(
      `http://localhost:9090/api/users/${user._id}`,
      updateBody,
      this.getHttpOptions()
    );
  }

  deleteUser(userId: string) {
    return this.http.delete<{ user: User }>(
      `http://localhost:9090/api/users/${userId}`,
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
