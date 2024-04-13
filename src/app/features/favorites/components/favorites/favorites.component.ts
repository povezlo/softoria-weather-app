import { AsyncPipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WeatherFacade } from '@features/weather';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesComponent {
  locations$ = this.weatherFacade.locations$;

  constructor(private weatherFacade: WeatherFacade) {
    weatherFacade.loadLocations('london');
  }
}
