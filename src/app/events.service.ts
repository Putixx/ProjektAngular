import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from './types';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}

  createEvent(event: any) {
    const createBody = {
      name: event.name,
      type: event.type,
      owner: event.owner,
      street: event.street,
      city: event.city,
      description: event.description,
      startDate: event.startDate,
      endDate: event.endDate,
      image: event.image,
      latitude: event.latitude,
      longitude: event.longitude,
      participants: event.participants,
      price: event.price,
      isPromoted: event.isPromoted,
    };

    return this.http.post<{ event: Event }>(
      'http://localhost:9090/api/events/create',
      createBody,
      this.getHttpOptions()
    );
  }

  getEvents() {
    return this.http.get<{ events: Event[] }>(
      'http://localhost:9090/api/events',
      this.getHttpOptions()
    );
  }

  updateEvent(event: any) {
    const updateBody = {
      name: event.name,
      type: event.type,
      owner: event.owner,
      street: event.street,
      city: event.city,
      description: event.description,
      startDate: event.startDate,
      endDate: event.endDate,
      image: event.image,
      latitude: event.latitude,
      longitude: event.longitude,
      participants: event.participants,
      price: event.price,
      isPromoted: event.isPromoted,
    };
    return this.http.patch<{ event: Event }>(
      `http://localhost:9090/api/events/${event._id}`,
      updateBody,
      this.getHttpOptions()
    );
  }

  deleteEvent(eventId: string) {
    return this.http.delete<{ event: Event }>(
      `http://localhost:9090/api/events/${eventId}`,
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
