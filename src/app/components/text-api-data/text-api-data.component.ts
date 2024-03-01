import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-api-data',
  templateUrl: './text-api-data.component.html',
  styleUrl: './text-api-data.component.scss'
})
export class TextApiDataComponent {
  @Input({required: true}) description: string = ""
  @Input({required: true}) value: string = ""
}
