import { createAction, props } from '@ngrx/store';
import { IWeather } from 'src/app/core/models';

export const loadWeather = createAction('[Weather] Load Weather', props<{ city: string }>());
export const loadWeatherSuccess = createAction(
  '[Weather] Load Weather Success',
  props<{ weather: IWeather }>()
);
export const loadWeatherFailure = createAction('[Weather] Load Weather Failure', props<{ error: any }>());
