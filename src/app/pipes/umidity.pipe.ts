import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'Umidity'
})
export class UmidityPipe implements PipeTransform {
    transform(value: number) : string {
        return value + '%'
    }   
}