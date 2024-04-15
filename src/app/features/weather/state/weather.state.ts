import { FavoritesState } from './favorites.reducer';
import { WeatherState } from './weather.reducer';

export interface AppState {
  weather: WeatherState;
  favorites: FavoritesState;
}
