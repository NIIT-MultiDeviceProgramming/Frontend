import { Component, OnInit } from '@angular/core';
import { UsersService } from '@shoppe/users';

@Component({
  selector: 'shoppe-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.initAppSession();
  }
  
  title = 'shopp-e';
}
