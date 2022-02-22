import { Component, Input, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { WeatherService } from '../shared/service/weather.sevice';

export interface weatherToday {
  name: string
}

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  weatherData: weatherToday = {
    name: 'Kiev'
  }
  @Input() cityName!: string

  constructor(public weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getDataForecast('Kiev').subscribe((data: weatherToday) => {
      this.weatherData = data
    })
    
    
  }

  click(){
    console.log(this.weatherData);
    
  }


}
