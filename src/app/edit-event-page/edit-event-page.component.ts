import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Event } from '../types'

@Component({
  selector: 'app-edit-event-page',
  templateUrl: './edit-event-page.component.html',
  styleUrls: ['./edit-event-page.component.scss']
})
export class EditEventPageComponent implements OnInit {
  event!: Event;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    //this.event = fakeEvents.find(event => event._id === id)!;
  }

  onSubmit() {
    alert('Editing event')
    this.router.navigateByUrl('/my-events')
  }
}
