import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedLoginService } from '../shared-login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  isLogged: boolean = false;

  constructor(
    private router: Router,
    private sharedLoginService: SharedLoginService
  ) {}

  ngOnInit(): void {
    this.sharedLoginService.changeEmitted$.subscribe((isLogged) => {
      this.isLogged = isLogged;
    });
  }

  clickEvent() {
    if (this.isLogged) {
      this.router.navigate(['/login']);
      this.isLogged = false;
      sessionStorage.clear();
    }
  }
}
