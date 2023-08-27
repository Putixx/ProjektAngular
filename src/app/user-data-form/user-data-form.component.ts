import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { User } from '../types';

@Component({
  selector: 'app-user-data-form',
  templateUrl: './user-data-form.component.html',
  styleUrls: ['./user-data-form.component.scss']
})
export class UserDataFormComponent implements OnInit {
  @Input() buttonText: string = 'click';
  @Input() currentUser!: User;

  @Output() onSubmit = new EventEmitter<User>();

  username: string = '';
  email: string = '';
  password: string = '';
  image: string = '';
  events: string[] = [];
  tickets: string[] = [];
  role: string = '';
  token: string = '';

  constructor() {}

  ngOnInit(): void {
    if (this.currentUser) {
      this.username = this.currentUser.username;
      this.email = this.currentUser.email;
      this.password = this.currentUser.password;
      this.image = this.currentUser.image;
      this.events = this.currentUser.events;
      this.tickets = this.currentUser.tickets;
      this.role = this.currentUser.role;
      this.token = this.currentUser.token;
    }
  }

  onButtonClicked(): void {
    let userId: string = '';
    if (this.currentUser) {
      userId = this.currentUser._id;
    }
    this.onSubmit.emit({
      _id: userId,
      username: this.username,
      email: this.email,
      password: this.password,
      image: this.image,
      events: this.events,
      tickets: this.tickets,
      role: this.role,
      token: this.token,
    });
  }
}
