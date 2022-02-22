import { Component, DoCheck, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, DoCheck {

  isLight = false
  theme = 'Light'
  search!: string

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    if (this.isLight) {
      this.theme = 'Dark'
    } else {
      this.theme = 'Light'
    }
  }

  getWeather() {
    this.search
  }

  
}
