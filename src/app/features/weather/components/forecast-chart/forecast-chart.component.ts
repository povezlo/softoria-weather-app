import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartComponent } from '@shared/components';
import { IDailyForecast } from '@core/models';

@Component({
  selector: 'app-forecast-chart',
  standalone: true,
  imports: [CommonModule, BaseChartComponent],
  templateUrl: './forecast-chart.component.html',
  styleUrls: ['./forecast-chart.component.scss'],
})
export class ForecastChartComponent {
  @Input() dailyForecasts: IDailyForecast[] = [];

  get config(): ChartConfiguration | undefined {
    if (!this.dailyForecasts) {
      return undefined;
    }

    const dayTemps = this.dailyForecasts.map(
      (item) => item.Temperature.Maximum.Value
    );
    const nightTemps = this.dailyForecasts.map(
      (item) => item.Temperature.Minimum.Value
    );
    const dates = this.dailyForecasts.map((item) => item.Date);

    const chartData = {
      labels: dates,
      datasets: [
        {
          label: 'Day',
          data: dayTemps,
          borderColor: 'red',
          fill: false,
        },
        {
          label: 'Night',
          data: nightTemps,
          borderColor: 'blue',
          fill: false,
        },
      ],
    };

    return {
      type: 'line' as ChartType,
      data: chartData,
    };
  }
}
