import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { EventDetailsPageComponent } from './event-details-page/event-details-page.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { UserEventsPageComponent } from './user-events-page/user-events-page.component';
import { CreateEventPageComponent } from './create-event-page/create-event-page.component';
import { EditEventPageComponent } from './edit-event-page/edit-event-page.component';
import { TicketsForEventPageComponent } from './tickets-for-event-page/tickets-for-event-page.component';
import { EventDataFormComponent } from './event-data-form/event-data-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsPageComponent,
    EventDetailsPageComponent,
    UserProfilePageComponent,
    UserEventsPageComponent,
    CreateEventPageComponent,
    EditEventPageComponent,
    TicketsForEventPageComponent,
    EventDataFormComponent,
    NavBarComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
