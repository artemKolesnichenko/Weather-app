import { Component, DoCheck, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { weatherToday } from '../forecast/forecast.component';
import { WeatherService } from '../shared/service/weather.sevice';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, DoCheck {

  isLight = false
  theme = 'Light'
  search!: string
  weatherData: any

  constructor(public weatherService: WeatherService) { }

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
    this.weatherService.getDataForecast(this.search).subscribe((data: weatherToday) => {
      this.weatherData = data
      console.log(this.weatherData);
      
    })
  }

  
}
