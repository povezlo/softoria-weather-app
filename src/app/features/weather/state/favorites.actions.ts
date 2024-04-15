import { ILocation } from '@core/models';
import { createAction, props } from '@ngrx/store';

export const addFavorite = createAction(
  '[Favorites] Add Favorite',
  props<{ location: ILocation }>()
);
export const removeFavorite = createAction(
  '[Favorites] Remove Favorite',
  props<{ locationKey: string }>()
);

export const loadFavoritesSuccess = createAction(
  '[Favorites] Load Favorite Success',
  props<{ favorites: ILocation[] }>()
);

export const loadFavoritesFailure = createAction(
  '[Favorites] No favorites found',
  props<{ error: Error }>()
);
export const loadFavorites = createAction('[Favorites] Load Favorites');
export const saveFavorites = createAction('[Favorites] Save Favorites');
