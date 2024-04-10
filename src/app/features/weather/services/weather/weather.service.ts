import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IWeather } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  getWeather(city: string): Observable<IWeather> {
    return of({
      city,
      country: '',
      temperature: 0
    });
  }
}