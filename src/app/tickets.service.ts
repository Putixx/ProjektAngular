import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket, Event } from './types';
import { EventsService } from './events.service';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  event!: Event;

  constructor(
    private http: HttpClient,
    private eventsService: EventsService
  ) {}

  addTicket(eventId: string) {
    const userId = sessionStorage.getItem('userId');
    
    this.eventsService.getEvents().subscribe((events) => {
      this.event = events.events.find((event: Event) => event._id == eventId)!;
      const ticketBody = {
        eventId: this.event._id,
        userId: userId,
      };

      this.http
      .post<{ ticket: Ticket }>(
        'http://localhost:9090/api/tickets/create',
        ticketBody,
        this.getHttpOptions()
      )
      .subscribe((data) => { });
    
    });
  }

  getTickets() {
    return this.http.get<{ tickets: Ticket[] }>(
      'http://localhost:9090/api/tickets',
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
