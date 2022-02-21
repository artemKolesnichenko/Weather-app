import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/service/weather.sevice';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  constructor(public weatherService: WeatherService) { }

  ngOnInit(): void {
    
  }

  click(){
    this.weatherService.getForecast('Kiev').subscribe()
  }

  

}
