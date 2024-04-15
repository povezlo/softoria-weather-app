import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchComponent } from '@core/components';
import { CurrentWeatherComponent, ForecastComponent } from '..';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, ForecastComponent, CurrentWeatherComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
