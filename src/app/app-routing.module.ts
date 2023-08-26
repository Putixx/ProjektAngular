import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsPageComponent } from './events-page/events-page.component';
import { EventDetailsPageComponent } from './event-details-page/event-details-page.component';
import { UserEventsPageComponent } from './user-events-page/user-events-page.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { CreateEventPageComponent } from './create-event-page/create-event-page.component';
import { EditEventPageComponent } from './edit-event-page/edit-event-page.component';
import { TicketsForEventPageComponent } from './tickets-for-event-page/tickets-for-event-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'events', component: EventsPageComponent, pathMatch: 'full' },
  { path: 'events/:id', component: EventDetailsPageComponent },
  { path: 'my-events', component: UserEventsPageComponent },
  { path: 'user-profile', component: UserProfilePageComponent },
  { path: 'new-event', component: CreateEventPageComponent },
  { path: 'edit-event/:id', component: EditEventPageComponent },
  { path: 'tickets/:id', component: TicketsForEventPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
