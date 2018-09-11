import { Component, OnInit } from '@angular/core';

import { SimpleService } from '../../common/simple.service';
import { User } from '../../common/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private readonly users: User[];
  constructor(private readonly simpleService: SimpleService) {
    this.users = this.simpleService.fetchUsers();
  }

  ngOnInit() {
    this.simpleService.maybeRedirectToFeed();
  }

  login(user: User) {
    this.simpleService.login(user);
  }
}
