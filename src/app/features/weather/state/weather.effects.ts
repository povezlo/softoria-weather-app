import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { catchError, delay, map, mergeMap, tap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as WeatherActions from './weather.actions';
import { WeatherFacade } from './weather.facade';

import { WeatherService } from '../services';
import { GeolocationService } from '@core/services';

@Injectable()
export class WeatherEffects {
  constructor(
    private actions$: Actions,
    private weatherService: WeatherService,
    private weatherFacade: WeatherFacade,
    private geolocationService: GeolocationService
  ) {}

  loadLocations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.loadLocations),
      tap(() => this.weatherFacade.showLoader()),
      delay(8000),
      mergeMap(({ query }) =>
        this.weatherService.getLocations(query).pipe(
          map((locations) => {
            this.weatherFacade.hideLoader();
            return WeatherActions.loadLocationsSuccess({ locations });
          }),
          catchError((error) => {
            this.weatherFacade.hideLoader();
            return of(WeatherActions.loadLocationsFailure({ error }));
          })
        )
      )
    )
  );

  loadCurrentConditions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.loadCurrentConditions),
      tap(() => this.weatherFacade.showLoader()),
      mergeMap(({ locationKey }) =>
        this.weatherService.getCurrentConditions(locationKey).pipe(
          map((currentConditions) => {
            this.weatherFacade.hideLoader();
            return WeatherActions.loadCurrentConditionsSuccess({
              currentConditions,
            });
          }),
          catchError((error) => {
            this.weatherFacade.hideLoader();
            return of(WeatherActions.loadCurrentConditionsFailure({ error }));
          })
        )
      )
    )
  );

  loadFiveDayForecast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.loadFiveDayForecast),
      tap(() => this.weatherFacade.showLoader()),
      mergeMap(({ locationKey }) =>
        this.weatherService.getFiveDayForecast(locationKey).pipe(
          map((fiveDayForecast) => {
            this.weatherFacade.hideLoader();
            return WeatherActions.loadFiveDayForecastSuccess({
              fiveDayForecast,
            });
          }),
          catchError((error) => {
            this.weatherFacade.hideLoader();
            return of(WeatherActions.loadFiveDayForecastFailure({ error }));
          })
        )
      )
    )
  );

  loadGeolocation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.loadGeolocation),
      mergeMap(() =>
        this.geolocationService.getCurrentPosition().pipe(
          mergeMap((position) =>
            this.weatherService.getLocationByCoords(
              position.coords.latitude,
              position.coords.longitude
            )
          ),
          map((location) =>
            WeatherActions.loadGeolocationSuccess({ location })
          ),
          catchError((error) =>
            of(WeatherActions.loadGeolocationFailure({ error }))
          )
        )
      )
    )
  );
}
