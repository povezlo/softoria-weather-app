import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as WeatherActions from './weather.actions';
import { of } from 'rxjs';
import { WeatherService } from '../services';

@Injectable()
export class WeatherEffects {
  constructor(private actions$: Actions, private weatherService: WeatherService) {}

  loadWeather$ = createEffect(() =>
  this.actions$.pipe(
    ofType(WeatherActions.loadWeather),
    mergeMap(({ city }) =>
      this.weatherService.getWeather(city).pipe(
        map((weather) => WeatherActions.loadWeatherSuccess({ weather })),
        catchError((error) => of(WeatherActions.loadWeatherFailure({ error })))
      )
    )
  )
);
}
