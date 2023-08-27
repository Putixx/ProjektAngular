import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { Router } from '@angular/router';
import { Event } from '../types';

@Component({
  selector: 'app-create-event-page',
  templateUrl: './create-event-page.component.html',
  styleUrls: ['./create-event-page.component.scss'],
})
export class CreateEventPageComponent implements OnInit {
  constructor(private router: Router, private eventsService: EventsService) {}

  ngOnInit(): void {}

  onSubmit(event: Event) {
    this.eventsService.createEvent(event).subscribe((event) => {});
    this.router.navigateByUrl('/my-events');
  }
}
