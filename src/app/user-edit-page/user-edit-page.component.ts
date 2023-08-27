import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../types';

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.scss']
})
export class UserEditPageComponent implements OnInit {
  user!: User;

  constructor(
    private router: Router,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users) => {
      this.user = users.users.find((user: User) => user._id === sessionStorage.getItem('userId'))!;
    });
  }

  onSubmit(user: User) {
    this.usersService.updateUser(user).subscribe((user) => {
      this.user = user.user;
    });
    this.router.navigateByUrl('/user-profile').then(() => window.location.reload());
  }
}
