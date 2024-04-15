import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { appRoutingProviders } from './app.routes';
import { ApiKeyInterceptor, ErrorInterceptor } from '@core/interceptors';
import { provideApiKey, provideBaseUrl } from '@core/providers';
import { WeatherEffects, weatherReducer } from '@features/weather/state';
import { favoritesReducer } from '@features/weather/state/favorites.reducer';
import { FavoritesEffects } from '@features/weather/state/favorites.effects';
import { environment } from '@env/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    appRoutingProviders,
    provideClientHydration(),
    provideAnimationsAsync(),
    provideBaseUrl(environment.baseURL),
    provideApiKey(environment.apiKey),
    provideHttpClient(
      withFetch(),
      withInterceptors([ErrorInterceptor, ApiKeyInterceptor])
    ),
    importProvidersFrom(
      StoreModule.forRoot({
        weather: weatherReducer,
        favorites: favoritesReducer,
      }),
      EffectsModule.forRoot([WeatherEffects, FavoritesEffects])
    ),
  ],
};
