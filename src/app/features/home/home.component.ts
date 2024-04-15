import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchComponent } from '@core/components';
import { ForecastComponent } from '..';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, ForecastComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
