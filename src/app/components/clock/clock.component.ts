import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss'
})


export class ClockComponent implements OnInit {
  currentTime!: Date;
  subscription!: Subscription;

  ngOnInit(): void {
      this.currentTime = new Date()
      console.log(this.currentTime)
      const timer = interval(1000); // Cria um observable que emite a cada 1 segundo

      this.subscription = timer.subscribe(() => {
      this.currentTime = new Date(); // Atualiza a hora atual a cada segundo
    });
  }
}
