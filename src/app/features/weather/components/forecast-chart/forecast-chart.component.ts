import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { IDailyForecast } from '@core/models';
import { ChartComponent } from '@shared/components/chart/chart.component';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-forecast-chart',
  standalone: true,
  imports: [ChartComponent],
  templateUrl: './forecast-chart.component.html',
  styleUrl: './forecast-chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastChartComponent implements OnChanges {
  @Input() dailyForecasts: IDailyForecast[] = [];

  @Input() chartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [],
  };
  chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dailyForecasts']) {
      this.updateChartData();
    }
  }

  private updateChartData() {
    const labels = this.dailyForecasts.map((forecast) =>
      new Date(forecast.Date).toLocaleDateString()
    );
    const minTemps = this.dailyForecasts.map(
      (forecast) => forecast.Temperature.Minimum.Value
    );
    const maxTemps = this.dailyForecasts.map(
      (forecast) => forecast.Temperature.Maximum.Value
    );

    this.chartData = {
      labels,
      datasets: [
        {
          label: 'Min Temp',
          data: minTemps,
          borderColor: 'blue',
          backgroundColor: 'rgba(0, 0, 255, 0.2)',
        },
        {
          label: 'Max Temp',
          data: maxTemps,
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.2)',
        },
      ],
    };
  }
}
