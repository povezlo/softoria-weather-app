import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appRoutingProviders } from './app.routes';
import { WeatherEffects, weatherReducer } from '@features/weather/state';

export const appConfig: ApplicationConfig = {
  providers: [
    appRoutingProviders,
    provideClientHydration(),
    provideAnimationsAsync(),
    importProvidersFrom(
      StoreModule.forRoot({ weather: weatherReducer }),
      EffectsModule.forRoot([WeatherEffects])
    ),
  ],
};
