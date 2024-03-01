import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'Speed'
})
export class SpeedPipe implements PipeTransform {
    transform(value: number) : string {
        return value + 'km/h'
    }   
}