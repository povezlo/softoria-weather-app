import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as WeatherActions from './weather.actions';
import { of } from 'rxjs';
import { WeatherService } from '../services';

@Injectable()
export class WeatherEffects {
  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}

  loadLocations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.loadLocations),
      mergeMap(({ query }) =>
        this.weatherService.getLocations(query).pipe(
          map((locations) =>
            WeatherActions.loadLocationsSuccess({ locations })
          ),
          catchError((error) =>
            of(WeatherActions.loadLocationsFailure({ error }))
          )
        )
      )
    )
  );

  loadCurrentConditions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.loadCurrentConditions),
      mergeMap(({ locationKey }) =>
        this.weatherService.getCurrentConditions(locationKey).pipe(
          map((currentConditions) =>
            WeatherActions.loadCurrentConditionsSuccess({ currentConditions })
          ),
          catchError((error) =>
            of(WeatherActions.loadCurrentConditionsFailure({ error }))
          )
        )
      )
    )
  );

  loadFiveDayForecast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.loadFiveDayForecast),
      mergeMap(({ locationKey }) =>
        this.weatherService.getFiveDayForecast(locationKey).pipe(
          map((fiveDayForecast) =>
            WeatherActions.loadFiveDayForecastSuccess({ fiveDayForecast })
          ),
          catchError((error) =>
            of(WeatherActions.loadFiveDayForecastFailure({ error }))
          )
        )
      )
    )
  );
}
