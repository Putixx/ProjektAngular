import { Component } from '@angular/core';
import { User } from '../types';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss']
})
export class UserProfilePageComponent {
  user!: User;
  
  constructor(
    private router: Router,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users) => {
      this.user = users.users.find((user: User) => user._id === sessionStorage.getItem('userId'))!;
      console.log(this.user.image);
    });
  }

  onDeleteClicked(userId: string) {
    this.usersService.deleteUser(userId).subscribe((users) => { });
    this.router.navigateByUrl('/login').then(() => {
      sessionStorage.clear();
      window.location.reload();
    });
  }

}
