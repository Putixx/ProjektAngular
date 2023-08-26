import { Component, OnInit } from '@angular/core';
import { Event } from '../types';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(events => {
      this.events = events.events;
    });
  }
}