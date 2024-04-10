import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentWeatherComponent {

}
