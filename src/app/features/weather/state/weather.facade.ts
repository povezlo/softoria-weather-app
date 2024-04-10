import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './weather.state';
import * as WeatherActions from './weather.actions';
import { selectError, selectLoading, selectWeather } from './weather.selectors';

@Injectable({ providedIn: 'root' })
export class WeatherFacade {
  weather$ = this.store.select(selectWeather);
  loading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);

  constructor(private store: Store<AppState>) {}

  loadWeather(city: string) {
    this.store.dispatch(WeatherActions.loadWeather({ city }));
  }
}
