
import { weatherInterface } from "../interfaces/weather-data.interface";

const mapWeatherData = (data: any): weatherInterface => {
    return {
      city_name: data.name,
      clouds: {
        all: data.clouds.all,
      },
      temperature: data.main.temp,
      max_temperature: data.main.temp_max,
      min_temperature: data.main.temp_min,
      thermal_sensation: data.main.feels_like,
      umidity: data.main.humidity,
      pressure: data.main.pressure,
      visibility: data.visibility,
      wind: {
        deg: data.wind.deg,
        speed: data.wind.speed,
      },
      weather: data.weather.map((item: any) => ({
        id: item.id,
        main: item.main,
        description: item.description,
        icon: item.icon,
      })),
    };
  }

  export { mapWeatherData };