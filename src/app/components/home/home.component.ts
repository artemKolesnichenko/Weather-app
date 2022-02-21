import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, DoCheck {

  isLight = false
  theme = 'Light'
  sub!: Subscription

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

  
  
  


}
