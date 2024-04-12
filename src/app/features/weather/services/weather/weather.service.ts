import { HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { ApiService } from '@core/services';
import { ICurrentConditions, IFiveDayForecast, ILocation } from '@core/models';

export interface IFiveDayForecastParams {
  details: boolean;
  enableMetric: boolean;
}

const VERSION = 'v1';
@Injectable({ providedIn: 'root' })
export class WeatherService {
  private readonly apiService = inject(ApiService);

  getLocations(query: string): Observable<ILocation[]> {
    const params = new HttpParams().set('q', query);
    return this.apiService.get<ILocation[]>(
      `locations/${VERSION}/cities/autocomplete`,
      params
    );
  }

  getCurrentConditions(
    locationKey: string,
    details = false
  ): Observable<ICurrentConditions[]> {
    const params = new HttpParams().set('details', details);
    return this.apiService.get<ICurrentConditions[]>(
      `currentconditions/${VERSION}/${locationKey}`,
      params
    );
  }

  getFiveDayForecast(
    locationKey: string,
    config: IFiveDayForecastParams = { details: false, enableMetric: true }
  ): Observable<IFiveDayForecast> {
    const params = new HttpParams()
      .set('details', config.details)
      .set('metric', config.enableMetric);
    return this.apiService.get<IFiveDayForecast>(
      `forecasts/${VERSION}/daily/5day/${locationKey}`,
      params
    );
  }
}
