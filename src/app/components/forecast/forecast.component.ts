import { Component, Input, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { WeatherService } from '../shared/service/weather.sevice';

export interface weatherToday {
  name: string
  current: {
    temp: number
  }
}

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  
  cityName!: string 
  @Input() weather!: weatherToday
  currentTemp!:number

  

  constructor(public weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getDataForecast('Kiev').subscribe((data: weatherToday) => {
      this.weather = data
      this.cityName = this.weatherService.data.name
      this.currentTemp =Math.floor(data.current.temp) 
      console.log(this.weather);
      
    })
  }
}
