import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shoppe-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('header')
  }

}
