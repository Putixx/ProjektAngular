import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEventsPageComponent } from './user-events-page.component';

describe('UserEventsPageComponent', () => {
  let component: UserEventsPageComponent;
  let fixture: ComponentFixture<UserEventsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserEventsPageComponent]
    });
    fixture = TestBed.createComponent(UserEventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
