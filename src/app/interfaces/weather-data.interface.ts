export interface weatherInterface {
    city_name: string,
    clouds: ICloud,
    temperature: number,
    max_temperature: number,
    min_temperature: number,
    thermal_sensation: number,
    umidity: number,
    pressure: number,
    visibility: number,
    wind: IWind,
    weather: IWeather[]
}

interface ICloud {
    all: number
}

interface IWind {
    deg : number,
    speed: number
}

interface IWeather {
    id: number;
    main: string;
    description: string;
    icon: string;
}