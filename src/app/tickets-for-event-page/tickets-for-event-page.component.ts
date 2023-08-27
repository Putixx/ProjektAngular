import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from '../types';
import { TicketsService } from '../tickets.service';

@Component({
  selector: 'app-tickets-for-event-page',
  templateUrl: './tickets-for-event-page.component.html',
  styleUrls: ['./tickets-for-event-page.component.scss']
})
export class TicketsForEventPageComponent implements OnInit {
  ticket!: Ticket;
  eventId: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private ticketsService: TicketsService) 
  { }

  ngOnInit(): void {
    this.eventId = this.route.snapshot.paramMap.get('id') ?? '';
    this.ticketsService.getTickets().subscribe(tickets => {
      this.ticket = tickets.tickets.find((ticket: Ticket) => ticket.eventId === this.eventId)!;
    });
  }

  buyTicket(): void {
    this.ticketsService.addTicket(this.eventId)
    this.router.navigateByUrl(`/events/${this.ticket.eventId}`);
  }
}
