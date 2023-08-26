import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket, Event, User } from './types';
import { EventsService } from './events.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  event!: Event;
  user!: User;

  constructor(
    private http: HttpClient,
    private eventsService: EventsService,
    private usersService: UsersService
  ) {}

  addTicket(eventId: string, userId: string) {
    this.eventsService.getEvents().subscribe((events) => {
      this.event = events.events.find((event: Event) => event._id === eventId)!;
    });

    var ticketBody = {
      name: this.event.name,
      type: this.event.type,
      price: this.event.price,
      date: this.event.startDate,
      event: this.event._id,
    };

    this.usersService.getUsers().subscribe((users) => {
      this.user = users.users.find((user: User) => user._id === userId)!;
    });

    this.http
      .post<{ ticket: Ticket }>(
        'http://localhost:9090/api/tickets/create',
        ticketBody,
        this.getHttpOptions()
      )
      .subscribe((data) => this.user.tickets.push(data.ticket._id));
    this.http
      .patch<{ user: User }>(
        'http://localhost:9090/api/users/' + userId,
        this.user,
        this.getHttpOptions()
      )
      .subscribe((data) => console.log(data));
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
