import {
  Component,
  Input,
  ViewChild,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ChartOptions, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent implements AfterViewInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  @Input() type: ChartType = 'line';
  @Input() data: ChartData<'line'> = {
    labels: [],
    datasets: [],
  };
  @Input() options: ChartOptions = {};

  ngAfterViewInit(): void {
    this.initChartOptions();
  }

  initChartOptions(): void {
    // Здесь вы можете задать дополнительные настройки для графика
    // Например, настройки для легенды, заголовка, осей и т.д.
    this.options = {
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
