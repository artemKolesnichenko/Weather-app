import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})

export class WeatherService {
    constructor(private http: HttpClient) {}

    data: any

    getDataForecast(city: string): Observable<any> {
        return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=85905fc5ea9164167760a025814dda35&units=metric`)
        .pipe(
            switchMap(data => {
                this.data = data

                return this.getForecastForWeek(data.coord.lat, data.coord.lon)
            })
        )
    }

    getForecastForWeek(lat: number, lon: number): Observable<any> {
        return this.http.get<any>(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=85905fc5ea9164167760a025814dda35&units=metric`)
    }
}