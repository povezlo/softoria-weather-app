import { HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable, of } from 'rxjs';

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

    // return this.apiService.get<ILocation[]>(
    //   `locations/${VERSION}/cities/autocomplete`,
    //   params
    // );

    return of([
      {
        Version: 1,
        Key: '328328',
        Type: 'City',
        Rank: 10,
        LocalizedName: 'London',
        Country: {
          ID: 'GB',
          LocalizedName: 'United Kingdom',
        },
        AdministrativeArea: {
          ID: 'LND',
          LocalizedName: 'London',
        },
      },
      {
        Version: 1,
        Key: '55489',
        Type: 'City',
        Rank: 35,
        LocalizedName: 'London',
        Country: {
          ID: 'CA',
          LocalizedName: 'Canada',
        },
        AdministrativeArea: {
          ID: 'ON',
          LocalizedName: 'Ontario',
        },
      },
      {
        Version: 1,
        Key: '329139',
        Type: 'City',
        Rank: 41,
        LocalizedName: 'Londonderry',
        Country: {
          ID: 'GB',
          LocalizedName: 'United Kingdom',
        },
        AdministrativeArea: {
          ID: 'DRS',
          LocalizedName: 'Derry City and Strabane',
        },
      },
      {
        Version: 1,
        Key: '2174076',
        Type: 'City',
        Rank: 65,
        LocalizedName: 'Londonderry',
        Country: {
          ID: 'US',
          LocalizedName: 'United States',
        },
        AdministrativeArea: {
          ID: 'NH',
          LocalizedName: 'New Hampshire',
        },
      },
      {
        Version: 1,
        Key: '711822',
        Type: 'City',
        Rank: 75,
        LocalizedName: 'London Colney',
        Country: {
          ID: 'GB',
          LocalizedName: 'United Kingdom',
        },
        AdministrativeArea: {
          ID: 'HRT',
          LocalizedName: 'Hertfordshire',
        },
      },
      {
        Version: 1,
        Key: '333298',
        Type: 'City',
        Rank: 75,
        LocalizedName: 'London',
        Country: {
          ID: 'US',
          LocalizedName: 'United States',
        },
        AdministrativeArea: {
          ID: 'KY',
          LocalizedName: 'Kentucky',
        },
      },
    ]);
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

    // return this.apiService.get<IFiveDayForecast>(
    //   `forecasts/${VERSION}/daily/5day/${locationKey}`,
    //   params
    // );
    return of({
      Headline: {
        EffectiveDate: '2024-04-15T08:00:00+01:00',
        EffectiveEpochDate: 1713164400,
        Severity: 5,
        Text: 'Expect showers Monday morning',
        Category: 'rain',
        EndDate: '2024-04-15T14:00:00+01:00',
        EndEpochDate: 1713186000,
        MobileLink:
          'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?unit=c&lang=en-us',
        Link: 'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?unit=c&lang=en-us',
      },
      DailyForecasts: [
        {
          Date: '2024-04-14T07:00:00+01:00',
          EpochDate: 1713074400,
          Temperature: {
            Minimum: {
              Value: 7.8,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 15.2,
              Unit: 'C',
              UnitType: 17,
            },
          },
          Day: {
            Icon: 4,
            IconPhrase: 'Intermittent clouds',
            HasPrecipitation: false,
          },
          Night: {
            Icon: 35,
            IconPhrase: 'Partly cloudy',
            HasPrecipitation: false,
          },
          Sources: ['AccuWeather'],
          MobileLink:
            'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=1&unit=c&lang=en-us',
          Link: 'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=1&unit=c&lang=en-us',
        },
        {
          Date: '2024-04-15T07:00:00+01:00',
          EpochDate: 1713160800,
          Temperature: {
            Minimum: {
              Value: 7,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 12.8,
              Unit: 'C',
              UnitType: 17,
            },
          },
          Day: {
            Icon: 14,
            IconPhrase: 'Partly sunny w/ showers',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Light',
          },
          Night: {
            Icon: 36,
            IconPhrase: 'Intermittent clouds',
            HasPrecipitation: false,
          },
          Sources: ['AccuWeather'],
          MobileLink:
            'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=2&unit=c&lang=en-us',
          Link: 'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=2&unit=c&lang=en-us',
        },
        {
          Date: '2024-04-16T07:00:00+01:00',
          EpochDate: 1713247200,
          Temperature: {
            Minimum: {
              Value: 4.7,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 14,
              Unit: 'C',
              UnitType: 17,
            },
          },
          Day: {
            Icon: 3,
            IconPhrase: 'Partly sunny',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Moderate',
          },
          Night: {
            Icon: 34,
            IconPhrase: 'Mostly clear',
            HasPrecipitation: false,
          },
          Sources: ['AccuWeather'],
          MobileLink:
            'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=3&unit=c&lang=en-us',
          Link: 'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=3&unit=c&lang=en-us',
        },
        {
          Date: '2024-04-17T07:00:00+01:00',
          EpochDate: 1713333600,
          Temperature: {
            Minimum: {
              Value: 4.5,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 11.8,
              Unit: 'C',
              UnitType: 17,
            },
          },
          Day: {
            Icon: 4,
            IconPhrase: 'Intermittent clouds',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Light',
          },
          Night: {
            Icon: 35,
            IconPhrase: 'Partly cloudy',
            HasPrecipitation: false,
          },
          Sources: ['AccuWeather'],
          MobileLink:
            'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=4&unit=c&lang=en-us',
          Link: 'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=4&unit=c&lang=en-us',
        },
        {
          Date: '2024-04-18T07:00:00+01:00',
          EpochDate: 1713420000,
          Temperature: {
            Minimum: {
              Value: 5.8,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 13.1,
              Unit: 'C',
              UnitType: 17,
            },
          },
          Day: {
            Icon: 4,
            IconPhrase: 'Intermittent clouds',
            HasPrecipitation: false,
          },
          Night: {
            Icon: 36,
            IconPhrase: 'Intermittent clouds',
            HasPrecipitation: false,
          },
          Sources: ['AccuWeather'],
          MobileLink:
            'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=5&unit=c&lang=en-us',
          Link: 'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=5&unit=c&lang=en-us',
        },
      ],
    });
  }

  getLocationByCoords(
    latitude: number,
    longitude: number,
    options?: { language?: string; details?: boolean; toplevel?: boolean }
  ): Observable<ILocation> {
    const params = new HttpParams().set('q', `${latitude},${longitude}`);

    if (options && options.language) {
      params.set('language', options.language);
    }

    if (options && options.details) {
      params.set('details', options.details);
    }

    if (options && options.toplevel) {
      params.set('toplevel', options.toplevel);
    }

    return this.apiService.get<ILocation>(
      `/locations/${VERSION}/cities/geoposition/search`,
      params
    );
  }
}
