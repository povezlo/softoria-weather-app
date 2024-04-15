import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './weather.state';
import * as FavoritesActions from './favorites.actions';
import { ILocation } from '@core/models';
import { selectFavorites } from './favorites.selectors';

@Injectable({ providedIn: 'root' })
export class FavoritesFacade {
  favorites$ = this.store.select(selectFavorites);

  constructor(private store: Store<AppState>) {}

  removeFavorite(locationKey: string): void {
    this.store.dispatch(FavoritesActions.removeFavorite({ locationKey }));
  }

  addFavorite(location: ILocation): void {
    this.store.dispatch(FavoritesActions.addFavorite({ location }));
  }
}
