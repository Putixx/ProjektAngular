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
  ticket: any;
  userId: string = "64b2b091cf283d8844d18c6d";
  username: string = "Marcel";
  password: string = "123";

  constructor(private route: ActivatedRoute, private router: Router, private ticketsService: TicketsService) 
  { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.ticketsService.getTickets().subscribe(tickets => {
      this.ticket = tickets.tickets.find((ticket: Ticket) => ticket.event === id)!;
    });
  }

  buyTicket(): void {
    this.ticketsService.addTicket(this.route.snapshot.paramMap.get('id') ?? '', this.userId)
    //this.ticketsService.addTicket(this.route.snapshot.paramMap.get('id') ?? '') TODO: add for user
    this.router.navigateByUrl('/events/' + this.ticket.event);
  }
}
