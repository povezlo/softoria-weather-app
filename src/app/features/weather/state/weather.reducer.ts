import { createReducer, on } from '@ngrx/store';
import * as WeatherActions from './weather.actions';
import * as LoaderActions from './loader.actions';
import { ILocation, ICurrentConditions, IFiveDayForecast } from '@core/models';

export interface WeatherState {
  locations: ILocation[];
  currentConditions: ICurrentConditions[] | null;
  fiveDayForecast: IFiveDayForecast | null;
  loading: boolean;
  error: Error | null;
  showLoader: boolean;
}

export const initialState: WeatherState = {
  locations: [],
  currentConditions: null,
  fiveDayForecast: null,
  loading: false,
  error: null,
  showLoader: false,
};

export const weatherReducer = createReducer(
  initialState,
  on(WeatherActions.loadLocations, (state) => ({ ...state, loading: true })),
  on(WeatherActions.loadLocationsSuccess, (state, { locations }) => ({
    ...state,
    locations,
    loading: false,
  })),
  on(WeatherActions.loadLocationsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(WeatherActions.loadCurrentConditions, (state) => ({
    ...state,
    loading: true,
  })),
  on(
    WeatherActions.loadCurrentConditionsSuccess,
    (state, { currentConditions }) => ({
      ...state,
      currentConditions,
      loading: false,
    })
  ),
  on(WeatherActions.loadCurrentConditionsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(WeatherActions.loadFiveDayForecast, (state) => ({
    ...state,
    loading: true,
  })),
  on(
    WeatherActions.loadFiveDayForecastSuccess,
    (state, { fiveDayForecast }) => ({
      ...state,
      fiveDayForecast,
      loading: false,
    })
  ),
  on(WeatherActions.loadFiveDayForecastFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(LoaderActions.showLoader, (state) => ({ ...state, showLoader: true })),
  on(LoaderActions.hideLoader, (state) => ({ ...state, showLoader: false }))
);
