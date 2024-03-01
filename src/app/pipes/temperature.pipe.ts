import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'Temperature'
})
export class TemperaturePipe implements PipeTransform {
    transform(tempC: number): string {
        
        const tempF = celsiusToFahrenheit(tempC)
        return tempC.toFixed(1) + "C° / " + tempF.toFixed(1) + "°F"
    }
}

function celsiusToFahrenheit(celsius: number) {
    return (celsius * 9/5) + 32;
}