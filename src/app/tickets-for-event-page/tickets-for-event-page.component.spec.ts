import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsForEventPageComponent } from './tickets-for-event-page.component';

describe('TicketsForEventPageComponent', () => {
  let component: TicketsForEventPageComponent;
  let fixture: ComponentFixture<TicketsForEventPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketsForEventPageComponent]
    });
    fixture = TestBed.createComponent(TicketsForEventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
