import { createReducer, on } from '@ngrx/store';
import * as FavoritesActions from './favorites.actions';
import { ILocation } from '@core/models';

export interface FavoritesState {
  favorites: ILocation[];
}

export const initialState: FavoritesState = {
  favorites: [],
};

export const favoritesReducer = createReducer(
  initialState,
  on(FavoritesActions.addFavorite, (state, { location }) => ({
    ...state,
    favorites: [...state.favorites, location],
  })),
  on(FavoritesActions.removeFavorite, (state, { locationKey }) => ({
    ...state,
    favorites: state.favorites.filter(
      (location) => location.Key !== locationKey
    ),
  }))
  // ... (обработка загрузки и сохранения из localStorage)
);
