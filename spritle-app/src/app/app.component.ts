import { Component } from '@angular/core';

import {SimpleService} from './common/simple.service';

@Component({
  selector: 'spritle',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private readonly simpleService: SimpleService) {}

  get isLoggedIn(): boolean {
    return this.simpleService.isLoggedIn;
  }

  logout(): void {
    this.simpleService.logout();
  }
}
