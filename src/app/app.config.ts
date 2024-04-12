import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { appRoutingProviders } from './app.routes';
import { provideApiKey, provideBaseUrl } from '@core/providers';
import { WeatherEffects, weatherReducer } from '@features/weather/state';
import { environment } from '@env/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    appRoutingProviders,
    provideClientHydration(),
    provideAnimationsAsync(),
    provideBaseUrl(environment.baseURL),
    provideApiKey(environment.apiKey),
    provideHttpClient(withInterceptors([])),
    importProvidersFrom(
      StoreModule.forRoot({ weather: weatherReducer }),
      EffectsModule.forRoot([WeatherEffects])
    ),
  ],
};
