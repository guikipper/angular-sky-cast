import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'Pressure'
})
export class PressurePipe implements PipeTransform {
    transform(value: number) : string {
        return value + 'hPa'
    }   
}