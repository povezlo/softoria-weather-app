import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart, { ChartData, ChartOptions, ChartType } from 'chart.js/auto';
import 'zone.js';
import 'chartjs-adapter-moment';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule],
  template: ` <canvas #canvas></canvas> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('canvas') canvas!: ElementRef;
  @Input() type: ChartType = 'line';
  @Input() data: ChartData<'line'> = {
    labels: [],
    datasets: [],
  };
  @Input() options: ChartOptions = {};

  chart!: Chart;

  ngAfterViewInit() {
    this.chart = new Chart(this.canvas.nativeElement, {
      type: this.type,
      data: this.data,
      options: this.getChartOptions(),
    });
  }

  getChartOptions(): ChartOptions {
    return {
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
