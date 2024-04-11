import {
  PreloadAllModules,
  Routes,
  provideRouter,
  withPreloading,
  withViewTransitions,
} from '@angular/router';
import { RoutePath } from '@core/models';

export const routes: Routes = [
  {
    path: RoutePath.HOME,
    title: 'Home Page',
    loadComponent: () => import('@features/home').then((m) => m.HomeComponent),
  },
  {
    path: RoutePath.FAVORITES,
    title: 'Favorites Page',
    loadChildren: () => import('@features/favorites').then((m) => m.routes),
  },
  {
    path: RoutePath.ERROR,
    title: 'Error Page',
    loadComponent: () =>
      import('@shared/components/error-page/error-page.component').then(
        (m) => m.ErrorPageComponent
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: RoutePath.HOME,
  },
  {
    path: '**',
    redirectTo: RoutePath.ERROR,
  },
];

export const appRoutingProviders = [
  provideRouter(
    routes,
    withPreloading(PreloadAllModules),
    withViewTransitions()
  ),
];
