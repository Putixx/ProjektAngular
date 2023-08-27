import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { User } from '../types';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  constructor(private router: Router, private usersService: UsersService) {}

  ngOnInit(): void {}

  onSubmit(user: User) {
    this.usersService.createUser(user).subscribe((user) => {});
    this.router.navigateByUrl('/login');
  }
}
