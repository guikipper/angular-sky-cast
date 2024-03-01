
import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
    name: 'WindDirection'
})
export class WindDirectionPipe implements PipeTransform {
    transform(degrees: number) : string {
        const direction = getWindDirection(degrees) 
        return direction
    }
}
function getWindDirection(degrees: number) {
    if (degrees >= 0 && degrees < 45) {
      return 'Norte (N)';
    } else if (degrees >= 45 && degrees < 90) {
      return 'Nordeste (NE)';
    } else if (degrees >= 90 && degrees < 135) {
      return 'Leste (E)';
    } else if (degrees >= 135 && degrees < 180) {
      return 'Sudeste (SE)';
    } else if (degrees >= 180 && degrees < 225) {
      return 'Sul (S)';
    } else if (degrees >= 225 && degrees < 270) {
      return 'Sudoeste (SW)';
    } else if (degrees >= 270 && degrees < 315) {
      return 'Oeste (W)';
    } else if (degrees >= 315 && degrees <= 360) {
      return 'Noroeste (NW)';
    } else {
      return 'Valor inválido';
    }
  }