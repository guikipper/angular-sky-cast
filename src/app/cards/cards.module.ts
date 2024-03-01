import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainCardComponent } from '../components/main-card/main-card.component';
import { TextApiDataComponent } from '../components/text-api-data/text-api-data.component';
import { TemperaturePipe } from '../pipes/temperature.pipe';
import { UmidityPipe } from '../pipes/umidity.pipe';
import { PressurePipe } from '../pipes/pressure.pipe';
import { VisibilityPipe } from '../pipes/visibility.pipe';
import { SpeedPipe } from '../pipes/speed.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { WindDirectionPipe } from '../pipes/windDirection.pipe';
import { ClockComponent } from '../components/clock/clock.component';

import { WeatherService } from '../services/weather.service';


import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    MainCardComponent,
    TextApiDataComponent,
    ClockComponent,
    TemperaturePipe,
    UmidityPipe,
    PressurePipe,
    VisibilityPipe,
    SpeedPipe,
    WindDirectionPipe
  ],
  imports: [
    CommonModule,
    MatInputModule, 
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule
  ],
  exports: [
    MainCardComponent,
    TextApiDataComponent,
    ClockComponent
  ],
  providers: [
    WeatherService
  ]
})
export class CardsModule { }
