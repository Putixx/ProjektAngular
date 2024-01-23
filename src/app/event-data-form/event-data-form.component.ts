import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../types';

@Component({
  selector: 'app-event-data-form',
  templateUrl: './event-data-form.component.html',
  styleUrls: ['./event-data-form.component.scss'],
})
export class EventDataFormComponent implements OnInit {
  @Input() buttonText: string = 'click';
  @Input() currentEvent!: Event;

  @Output() onSubmit = new EventEmitter<Event>();

  name: string = '';
  type: string = '';
  owner: string = '';
  street: string = '';
  city: string = '';
  description: string = '';
  startDate: Date = new Date();
  endDate: Date = new Date();
  image: string = 'empty';
  latitude: number = 0;
  longitude: number = 0;
  participants: string[] = [];
  price: number = 0;

  constructor() {}

  ngOnInit(): void {
    if (this.currentEvent) {
      this.name = this.currentEvent.name;
      this.type = this.currentEvent.type;
      this.owner = this.currentEvent.owner;
      this.street = this.currentEvent.street;
      this.city = this.currentEvent.city;
      this.description = this.currentEvent.description;
      this.startDate = this.currentEvent.startDate;
      this.endDate = this.currentEvent.endDate;
      this.image = this.currentEvent.image;
      this.latitude = this.currentEvent.latitude;
      this.longitude = this.currentEvent.longitude;
      this.participants = this.currentEvent.participants;
      this.price = this.currentEvent.price;
    }
  }

  onButtonClicked(): void {
    if (!this.participants.includes(sessionStorage.getItem('userId') + '')) {
      this.participants.push(sessionStorage.getItem('userId') + '');
    }
    if (this.owner == '' || this.owner == undefined) {
      this.owner = sessionStorage.getItem('userId') + '';
    }
    let eventId: string = '';
    if (this.currentEvent) {
      eventId = this.currentEvent._id;
    }
    this.onSubmit.emit({
      _id: eventId,
      name: this.name,
      type: this.type,
      owner: this.owner,
      street: this.street,
      city: this.city,
      description: this.description,
      startDate: new Date(this.startDate),
      endDate: new Date(this.endDate),
      image: this.image,
      latitude: Number(this.latitude),
      longitude: Number(this.longitude),
      participants: this.participants,
      price: Number(this.price),
      isPromoted: false,
    });
  }
}
