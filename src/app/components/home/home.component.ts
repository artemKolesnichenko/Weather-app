import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, DoCheck {

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
  
  isLight = false
  theme = 'Light'


}
