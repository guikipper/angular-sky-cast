import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}
  apiKey: string = "your api key"
  apiUrl: string = ""

  getWeather(city: string) {
    this.apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}&lang=pt_br`
    return this.http.get(this.apiUrl);
  }
}
