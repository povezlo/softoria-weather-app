import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FavoritesFacade, WeatherFacade } from '@features/weather/state';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ILocation } from '@core/models';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [MatCardModule, MatIconModule, AsyncPipe, NgIf, NgFor],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentWeatherComponent {
  currentConditions$ = this.weatherFacade.currentConditions$;
  selectedLocation$ = this.weatherFacade.selectedLocation$;
  loading$ = this.weatherFacade.loading$;
  error$ = this.weatherFacade.error$;

  constructor(
    private weatherFacade: WeatherFacade,
    private favoritesFacade: FavoritesFacade
  ) {}

  getWeatherIcon(iconNumber: number): string {
    const iconMap: { [key: number]: string } = {
      1: 'wb_sunny',
      2: 'partly_cloudy_day',
      3: 'cloudy',
      4: 'cloudy',
      5: 'rainy',
      6: 'rainy',
      7: 'snowy',
      8: 'snowy',
      32: 'wb_sunny',
    };

    return iconMap[iconNumber] || 'help_outline';
  }

  toggleFavorite(location: ILocation) {
    if (this.isFavorite(location)) {
      this.favoritesFacade.removeFavorite(location.Key);
    } else {
      this.favoritesFacade.addFavorite(location);
    }
  }

  isFavorite(location: ILocation): boolean {
    return !!location;
    // ... (логика для проверки, находится ли город в избранном)
  }
}
