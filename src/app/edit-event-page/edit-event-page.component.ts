import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../events.service';
import { Event } from '../types';

@Component({
  selector: 'app-edit-event-page',
  templateUrl: './edit-event-page.component.html',
  styleUrls: ['./edit-event-page.component.scss'],
})
export class EditEventPageComponent implements OnInit {
  event!: Event;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eventsService: EventsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.eventsService.getEvents().subscribe((events) => {
      this.event = events.events.find((event: Event) => event._id === id)!;
    });
  }

  onSubmit(event: Event) {
    this.eventsService.updateEvent(event).subscribe((event) => {
      this.event = event.event;
    });
    this.router.navigateByUrl('/my-events').then(() => window.location.reload());
  }
}
