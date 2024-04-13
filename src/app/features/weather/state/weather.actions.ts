import { createAction, props } from '@ngrx/store';
import { ILocation, ICurrentConditions, IFiveDayForecast } from '@core/models';

export const loadLocations = createAction(
  '[Weather] Load Locations',
  props<{ query: string }>()
);

export const loadLocationsSuccess = createAction(
  '[Weather] Load Locations Success',
  props<{ locations: ILocation[] }>()
);

export const loadLocationsFailure = createAction(
  '[Weather] Load Locations Failure',
  props<{ error: Error }>()
);

export const loadCurrentConditions = createAction(
  '[Weather] Load Current Conditions',
  props<{ locationKey: string }>()
);
export const loadCurrentConditionsSuccess = createAction(
  '[Weather] Load Current Conditions Success',
  props<{ currentConditions: ICurrentConditions[] }>()
);

export const loadCurrentConditionsFailure = createAction(
  '[Weather] Load Current Conditions Failure',
  props<{ error: Error }>()
);

export const loadFiveDayForecast = createAction(
  '[Weather] Load Five Day Forecast',
  props<{ locationKey: string }>()
);

export const loadFiveDayForecastSuccess = createAction(
  '[Weather] Load Five Day Forecast Success',
  props<{ fiveDayForecast: IFiveDayForecast }>()
);
export const loadFiveDayForecastFailure = createAction(
  '[Weather] Load Five Day Forecast Failure',
  props<{ error: Error }>()
);

export const loadGeolocation = createAction('[Weather] Load Geolocation');

export const loadGeolocationSuccess = createAction(
  '[Weather] Load Geolocation Success',
  props<{ location: Location }>()
);

export const loadGeolocationFailure = createAction(
  '[Weather] Load Geolocation Failure',
  props<{ error: Error }>()
);
