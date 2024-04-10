import { createSelector } from '@ngrx/store';
import { AppState } from './weather.state';
import { WeatherState } from './weather.reducer';

export const selectWeatherState = (state: AppState) => state.weather;

export const selectWeather = createSelector(selectWeatherState, (state: WeatherState) => state.weather);
export const selectLoading = createSelector(selectWeatherState, (state: WeatherState) => state.loading);
export const selectError = createSelector(selectWeatherState, (state: WeatherState) => state.error);
