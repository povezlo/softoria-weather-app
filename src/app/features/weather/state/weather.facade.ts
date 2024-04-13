import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './weather.state';
import * as WeatherActions from './weather.actions';
import * as LoaderActions from './loader.actions';
import {
  selectLocations,
  selectCurrentConditions,
  selectFiveDayForecast,
  selectLoading,
  selectError,
  selectShowLoader,
} from './weather.selectors';

@Injectable({ providedIn: 'root' })
export class WeatherFacade {
  locations$ = this.store.select(selectLocations);
  currentConditions$ = this.store.select(selectCurrentConditions);
  fiveDayForecast$ = this.store.select(selectFiveDayForecast);
  loading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);
  showLoader$ = this.store.select(selectShowLoader);

  constructor(private store: Store<AppState>) {}

  loadLocations(query: string): void {
    this.store.dispatch(WeatherActions.loadLocations({ query }));
  }

  loadCurrentConditions(locationKey: string): void {
    this.store.dispatch(WeatherActions.loadCurrentConditions({ locationKey }));
  }

  loadFiveDayForecast(locationKey: string): void {
    this.store.dispatch(WeatherActions.loadFiveDayForecast({ locationKey }));
  }

  showLoader(): void {
    this.store.dispatch(LoaderActions.showLoader());
  }

  hideLoader(): void {
    this.store.dispatch(LoaderActions.hideLoader());
  }
}
