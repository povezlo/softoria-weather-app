import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { WeatherService } from '@features/weather/services';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesComponent implements OnInit {
  private readonly ws = inject(WeatherService);

  ngOnInit(): void {
    this.ws.getFiveDayForecast('324505').subscribe((locations) => {
      console.log(locations);
    });
  }
}
