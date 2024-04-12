import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './weather.state';
import * as WeatherActions from './weather.actions';
import {
  selectLocations,
  selectCurrentConditions,
  selectFiveDayForecast,
  selectLoading,
  selectError,
} from './weather.selectors';

@Injectable({ providedIn: 'root' })
export class WeatherFacade {
  locations$ = this.store.select(selectLocations);
  currentConditions$ = this.store.select(selectCurrentConditions);
  fiveDayForecast$ = this.store.select(selectFiveDayForecast);
  loading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);

  constructor(private store: Store<AppState>) {}

  loadLocations(query: string) {
    this.store.dispatch(WeatherActions.loadLocations({ query }));
  }

  loadCurrentConditions(locationKey: string) {
    this.store.dispatch(WeatherActions.loadCurrentConditions({ locationKey }));
  }

  loadFiveDayForecast(locationKey: string) {
    this.store.dispatch(WeatherActions.loadFiveDayForecast({ locationKey }));
  }
}
