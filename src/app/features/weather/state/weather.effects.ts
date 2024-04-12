import { Injectable } from '@angular/core';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from './weather.state';
import * as WeatherActions from './weather.actions';
import * as LoaderActions from './loader.actions';
import { WeatherService } from '../services';

@Injectable()
export class WeatherEffects {
  constructor(
    private actions$: Actions,
    private weatherService: WeatherService,
    private store: Store<AppState>
  ) {}

  loadLocations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.loadLocations),
      tap(() => this.store.dispatch(LoaderActions.showLoader())),
      mergeMap(({ query }) =>
        this.weatherService.getLocations(query).pipe(
          map((locations) => {
            this.store.dispatch(LoaderActions.hideLoader());
            return WeatherActions.loadLocationsSuccess({ locations });
          }),
          catchError((error) => {
            this.store.dispatch(LoaderActions.hideLoader());
            return of(WeatherActions.loadLocationsFailure({ error }));
          })
        )
      )
    )
  );

  loadCurrentConditions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.loadCurrentConditions),
      tap(() => this.store.dispatch(LoaderActions.showLoader())),
      mergeMap(({ locationKey }) =>
        this.weatherService.getCurrentConditions(locationKey).pipe(
          map((currentConditions) => {
            this.store.dispatch(LoaderActions.hideLoader());
            return WeatherActions.loadCurrentConditionsSuccess({
              currentConditions,
            });
          }),
          catchError((error) => {
            this.store.dispatch(LoaderActions.hideLoader());
            return of(WeatherActions.loadCurrentConditionsFailure({ error }));
          })
        )
      )
    )
  );

  loadFiveDayForecast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.loadFiveDayForecast),
      tap(() => this.store.dispatch(LoaderActions.showLoader())),
      mergeMap(({ locationKey }) =>
        this.weatherService.getFiveDayForecast(locationKey).pipe(
          map((fiveDayForecast) => {
            this.store.dispatch(LoaderActions.hideLoader());
            return WeatherActions.loadFiveDayForecastSuccess({
              fiveDayForecast,
            });
          }),
          catchError((error) => {
            this.store.dispatch(LoaderActions.hideLoader());
            return of(WeatherActions.loadFiveDayForecastFailure({ error }));
          })
        )
      )
    )
  );
}
