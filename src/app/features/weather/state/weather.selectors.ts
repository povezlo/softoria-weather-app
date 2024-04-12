import { createSelector } from '@ngrx/store';
import { AppState } from './weather.state';

export const selectWeatherState = (state: AppState) => state.weather;

export const selectLocations = createSelector(
  selectWeatherState,
  (state) => state.locations
);

export const selectCurrentConditions = createSelector(
  selectWeatherState,
  (state) => state.currentConditions
);

export const selectFiveDayForecast = createSelector(
  selectWeatherState,
  (state) => state.fiveDayForecast
);

export const selectLoading = createSelector(
  selectWeatherState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectWeatherState,
  (state) => state.error
);

export const selectShowLoader = createSelector(
  selectWeatherState,
  (state) => state.showLoader
);
