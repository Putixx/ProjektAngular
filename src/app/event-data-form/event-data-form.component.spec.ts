import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDataFormComponent } from './event-data-form.component';

describe('EventDataFormComponent', () => {
  let component: EventDataFormComponent;
  let fixture: ComponentFixture<EventDataFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventDataFormComponent]
    });
    fixture = TestBed.createComponent(EventDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
