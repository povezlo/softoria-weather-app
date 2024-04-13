import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent implements AfterViewInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  @Input() type: ChartType = 'line';
  @Input() chartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [],
  };
  @Input() chartOptions: ChartOptions<'line'> = {
    responsive: false,
  };

  ngAfterViewInit() {
    this.initChartOptions();
  }

  public someAction(): void {
    this.chart?.toBase64Image();
  }

  initChartOptions(): void {
    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Пример графика',
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#333',
          },
        },
        y: {
          ticks: {
            color: '#333',
          },
        },
      },
    };
  }

  updateChart(): void {
    if (this.chart) {
      this.chart.update();
    }
  }
}
