import { createReducer, on } from '@ngrx/store';
import * as WeatherActions from './weather.actions';
import { IWeather } from 'src/app/core/models';

export interface WeatherState {
  weather: IWeather | null;
  loading: boolean;
  error: any;
}

export const initialState: WeatherState = {
  weather: null,
  loading: false,
  error: null,
};

export const weatherReducer = createReducer(
  initialState,
  on(WeatherActions.loadWeather, (state) => ({ ...state, loading: true })),
  on(WeatherActions.loadWeatherSuccess, (state, { weather }) => ({ ...state, weather, loading: false })),
  on(WeatherActions.loadWeatherFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
