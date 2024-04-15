import { createSelector } from '@ngrx/store';
import { AppState } from './weather.state';

export const selectFavoritesState = (state: AppState) => state.favorites;

export const selectFavorites = createSelector(
  selectFavoritesState,
  (state) => state.favorites
);
