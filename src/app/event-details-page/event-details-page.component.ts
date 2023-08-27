import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../types';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-event-details-page',
  templateUrl: './event-details-page.component.html',
  styleUrls: ['./event-details-page.component.scss'],
})
export class EventDetailsPageComponent implements OnInit {
  event!: Event;

  constructor(
    private route: ActivatedRoute,
    private eventsService: EventsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.eventsService.getEvents().subscribe((events) => {
      this.event = events.events.find((event: Event) => event._id === id)!;
    });
  }
}
