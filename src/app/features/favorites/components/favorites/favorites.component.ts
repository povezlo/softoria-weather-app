import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IFiveDayForecast } from '@core/models';
import { ForecastChartComponent, WeatherService } from '@features/weather';
import { EMPTY } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, NgIf, NgFor, ForecastChartComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesComponent implements OnInit {
  fiveDayForecast$: Observable<IFiveDayForecast | null> = EMPTY;

  constructor(private weatherFacade: WeatherService) {}

  ngOnInit(): void {
    this.fiveDayForecast$ = this.weatherFacade.getFiveDayForecast('328328');
  }
}
