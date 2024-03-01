import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { mapWeatherData } from '../../utils/mapWeatherData';
import { weatherInterface } from '../../interfaces/weather-data.interface';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.scss',

})
export class MainCardComponent{
  public inputText: any = ""
  showResult: boolean = false

   weatherData: weatherInterface = {
    city_name: '',
    clouds: {
      all: 0
    },
    temperature: 0,
    max_temperature: 0,
    min_temperature: 0,
    thermal_sensation: 0,
    umidity: 0,
    pressure: 0,
    visibility: 0,
    wind: {
      deg: 0,
      speed: 0
    },
    weather: [{
      id: 0,
      main: '',
      description: '',
      icon: ''
    }]
  }

  constructor(private weatherService: WeatherService) {}

  searchCityWeather() {
    
    if (this.inputText.length > 1) {
      this.weatherService.getWeather(this.inputText).subscribe((data: any) => {
        this.weatherData = mapWeatherData(data);
        this.showResult = true
        console.log(this.weatherData)
      });
    }
    
  }

}
