import { Component, OnInit  } from '@angular/core';
import { Event, User } from '../types';
import { EventsService } from '../events.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-events-page',
  templateUrl: './user-events-page.component.html',
  styleUrls: ['./user-events-page.component.scss']
})
export class UserEventsPageComponent implements OnInit {
  events: Event[] = [];
  user!: User;

  constructor(private eventsService: EventsService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(users => {
      this.user = users.users.find((user: User) => user.email == sessionStorage.getItem('userEmail'))!;
      sessionStorage.setItem('userId', this.user._id);

      this.eventsService.getEvents().subscribe(events => {
        this.events = events.events.filter((event: Event) => event.owner.includes(this.user._id));
      });
    });
  }
  
  onDeleteClicked(eventId: string): void {
    alert('Deleting your listing with id' + eventId);
  }
}
