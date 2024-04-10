import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IWeather } from 'src/app/core';

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
