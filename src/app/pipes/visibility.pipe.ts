import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'Visibility'
})
export class VisibilityPipe implements PipeTransform {
    transform(value: number) : string {
        return value + 'm'
    }   
}