import { Component, OnInit } from '@angular/core';
import { Event, User } from '../types';
import { EventsService } from '../events.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-events-page',
  templateUrl: './user-events-page.component.html',
  styleUrls: ['./user-events-page.component.scss'],
})
export class UserEventsPageComponent implements OnInit {
  ownedEvents: Event[] = [];
  participatedEvents: Event[] = [];
  user!: User;

  constructor(
    private eventsService: EventsService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users) => {
      this.user = users.users.find(
        (user: User) => user.email == sessionStorage.getItem('userEmail')
      )!;

      this.eventsService.getEvents().subscribe((events) => {
        this.ownedEvents = events.events.filter((event: Event) =>
          event.owner.includes(this.user._id)
        );
      });

      this.eventsService.getEvents().subscribe((events) => {
        this.participatedEvents = events.events.filter((event: Event) =>
          event.participants.includes(this.user._id)
        );
        
        this.participatedEvents = this.participatedEvents.filter( el1 => !this.ownedEvents.find(el2 => el1._id == el2._id))
      });
    });
  }

  onDeleteClicked(eventId: string): void {
    this.eventsService.deleteEvent(eventId).subscribe((event) => window.location.reload());
    
  }
}
