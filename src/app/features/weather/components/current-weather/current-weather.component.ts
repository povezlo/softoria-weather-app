import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WeatherFacade } from '@features/weather/state';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentWeatherComponent {
  weather$ = this.weatherFacade.weather$;
  loading$ = this.weatherFacade.loading$;
  error$ = this.weatherFacade.error$;

  constructor(private weatherFacade: WeatherFacade) {}
}
