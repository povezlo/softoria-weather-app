//import { APP_INITIALIZER } from '@angular/core';
import { API_KEY, BASE_URL } from '@core/injectTokens';
// import { LoaderService, LoaderState } from '@shared/components';

export function provideBaseUrl(value: string) {
  return { provide: BASE_URL, useValue: value };
}

export function provideApiKey(value: string) {
  return { provide: API_KEY, useValue: value };
}

// export function provideInitializeApp() {
//   return {
//     provide: APP_INITIALIZER,
//     useFactory: initializeAppFactory,
//     multi: true,
//     deps: [LoaderService],
//   };
// }

// function initializeAppFactory(loader: LoaderService): () => void {
//   return () => loader.loaderStateSource$.next(LoaderState.loading);
// }
