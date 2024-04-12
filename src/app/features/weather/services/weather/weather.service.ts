import { HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API_KEY } from '@core/injectTokens';

import { Observable } from 'rxjs';

import { ApiService } from '@core/services';
import { ICurrentConditions, IFiveDayForecast, ILocation } from '@core/models';

const VERSION = 'v1';
@Injectable({ providedIn: 'root' })
export class WeatherService {
  private readonly apiService = inject(ApiService);
  private readonly apiKey = inject(API_KEY);

  getLocations(query: string): Observable<ILocation[]> {
    const params = new HttpParams().set('q', query).set('apikey', this.apiKey);
    return this.apiService.get<ILocation[]>(
      `locations/${VERSION}/cities/autocomplete`,
      params
    );
  }

  getCurrentConditions(locationKey: string): Observable<ICurrentConditions[]> {
    const params = new HttpParams()
      .set('apikey', this.apiKey)
      .set('details', 'true');
    return this.apiService.get<ICurrentConditions[]>(
      `currentconditions/${VERSION}/${locationKey}`,
      params
    );
  }

  getFiveDayForecast(locationKey: string): Observable<IFiveDayForecast> {
    const params = new HttpParams()
      .set('apikey', this.apiKey)
      .set('details', 'true')
      .set('metric', 'true');
    return this.apiService.get<IFiveDayForecast>(
      `forecasts/${VERSION}/daily/5day/${locationKey}`,
      params
    );
  }
}
