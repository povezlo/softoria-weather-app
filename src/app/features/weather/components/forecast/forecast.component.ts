import { AsyncPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ForecastChartComponent } from '@features/weather';
import { WeatherFacade } from '@features/weather/state';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [
    AsyncPipe,
    DatePipe,
    MatIconModule,
    MatCardModule,
    ForecastChartComponent,
    MatButtonModule,
  ],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastComponent implements OnInit {
  fiveDayForecast$ = this.weatherFacade.fiveDayForecast$;
  selectedTabIndex = 0; // 0 - плитки, 1 - график
  showChart = false;

  toggleView() {
    this.showChart = !this.showChart;
  }

  getWeatherIcon(iconNumber: number): string {
    const iconMap: { [key: number]: string } = {
      1: 'sunny',
      2: 'wb_sunny',
      3: 'cloud',
      4: 'cloud',
      5: 'cloudy_snowing',
      6: 'cloudy_snowing',
      7: 'snowing',
      8: 'snowing',
      32: 'sunny',
      35: 'wb_sunny',
    };

    return iconMap[iconNumber] || 'help_outline';
  }

  constructor(private weatherFacade: WeatherFacade) {}

  ngOnInit(): void {
    this.weatherFacade.loadFiveDayForecast('328328');
  }
}
