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

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.createChart();
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

  ngOnDestroy() {
    if (this.chart && isPlatformBrowser(this.platformId)) {
      this.chart.destroy();
    }
  }
}
