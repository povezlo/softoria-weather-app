import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  OnChanges,
  SimpleChanges,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { isPlatformBrowser } from '@angular/common';
import { ThemeService } from '@core/services';

Chart.register(...registerables);

@Component({
  selector: 'app-base-chart',
  standalone: true,
  imports: [CommonModule],
  template: '<canvas #canvas></canvas>',
  styles: ['canvas { width: 100%; height: 100%; }'],
})
export class BaseChartComponent implements OnChanges, OnDestroy {
  @Input() config: ChartConfiguration | undefined;
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  chart: Chart | undefined;
  isDarkTheme = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.createChart();
      this.themeService.currentTheme.subscribe((isDark) => {
        this.isDarkTheme = isDark;
        this.updateChartTheme();
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['config'] && this.chart && isPlatformBrowser(this.platformId)) {
      this.chart.destroy();
      this.createChart();
    }
  }

  createChart() {
    if (!isPlatformBrowser(this.platformId) || !this.config) {
      return;
    }

    if (this.canvas && this.canvas.nativeElement) {
      this.chart = new Chart(this.canvas.nativeElement, this.config);
    }
  }

  updateChartTheme() {
    if (this.chart) {
      const isDarkTheme = this.isDarkTheme;
      const gridColor = isDarkTheme
        ? 'rgba(255, 255, 255, 0.2)'
        : 'rgba(0, 0, 0, 0.1)';
      const textColor = isDarkTheme ? '#ffffff' : '#000000';

      this.chart.options = {
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: textColor,
            },
            grid: {
              color: gridColor,
            },
          },
          y: {
            ticks: {
              color: textColor,
            },
            grid: {
              color: gridColor,
            },
          },
        },
      };

      this.chart.update();
    }
  }

  ngOnDestroy() {
    if (this.chart && isPlatformBrowser(this.platformId)) {
      this.chart.destroy();
    }
  }
}
