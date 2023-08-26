import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from './types';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get<{ events: Event[] }>(
      'http://localhost:9090/api/events',
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
