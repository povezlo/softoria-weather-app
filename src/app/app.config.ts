import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { routes } from './app.routes';
import { WeatherEffects, weatherReducer } from '@features/weather/state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), provideClientHydration(),
    importProvidersFrom(
      StoreModule.forRoot({ weather: weatherReducer }),
      EffectsModule.forRoot([WeatherEffects])
    )
  ]
};
