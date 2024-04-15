import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap, withLatestFrom } from 'rxjs/operators';
import * as FavoritesActions from './favorites.actions';
import { FavoritesFacade } from './favorites.facade';

@Injectable()
export class FavoritesEffects {
  constructor(
    private actions$: Actions,
    private favoritesFacade: FavoritesFacade
  ) {}

  saveFavorites$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(FavoritesActions.addFavorite, FavoritesActions.removeFavorite),
        withLatestFrom(this.favoritesFacade.favorites$),
        tap(([_, favorites]) =>
          localStorage.setItem('favorites', JSON.stringify(favorites))
        )
      ),
    { dispatch: false }
  );

  loadFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FavoritesActions.loadFavorites),
      map(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
          return FavoritesActions.loadFavoritesSuccess({
            favorites: JSON.parse(storedFavorites),
          });
        }
        return FavoritesActions.loadFavoritesFailure({
          error: new Error('No favorites found'),
        });
      })
    )
  );
}
