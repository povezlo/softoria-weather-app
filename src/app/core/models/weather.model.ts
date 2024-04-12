export interface IWeather {
  city: string;
  country: string;
  temperature: number;
}
export interface ICurrentConditions {
  LocalObservationDateTime: string;
  EpochTime: number;
  WeatherText: string;
  WeatherIcon: number;
  HasPrecipitation: boolean;
  PrecipitationType: null | string;
  IsDayTime: boolean;
  Temperature: IMetric;
  RealFeelTemperature: IMetric;
  RealFeelTemperatureShade: IMetric;
  RelativeHumidity: number;
  IndoorRelativeHumidity: number;
  DewPoint: IMetric;
  Wind: IWind;
  WindGust: IWind;
  UVIndex: number;
  UVIndexText: string;
  Visibility: IMetric;
  ObstructionsToVisibility: string;
  CloudCover: number;
  Ceiling: IMetric;
  Pressure: IMetric;
  PressureTendency: IPressureTendency;
  Past24HourTemperatureDeparture: IMetric;
  ApparentTemperature: IMetric;
  WindChillTemperature: IMetric;
  WetBulbTemperature: IMetric;
  WetBulbGlobeTemperature: IMetric;
  Precip1hr: IUnitData;
  PrecipitationSummary: IPrecipitationSummary;
  TemperatureSummary: ITemperatureSummary;
  MobileLink: string;
  Link: string;
}

export interface IDailyForecast {
  Date: string;
  EpochDate: number;
  Temperature: ITemperatureRange;
  Day: IconInterface;
  Night: IconInterface;
  Sources: string[];
  MobileLink: string;
  Link: string;
}

export interface IFiveDayForecast {
  Headline: IHeadline;
  DailyForecasts: IDailyForecast[];
}

export interface IHeadline {
  EffectiveDate: string;
  EffectiveEpochDate: number;
  Severity: number;
  Text: string;
  Category: string;
  EndDate: string;
  EndEpochDate: number;
  MobileLink: string;
  Link: string;
}
// Скорость ветра

export interface IWind {
  Direction: IWindDirection;
  Speed: IUnitData;
}

export interface IWindDirection {
  Degrees: number;
  Localized: string;
  English: string;
}

// Осадки

export interface IPrecipitationSummary {
  Precipitation: IUnitData;
  PastHour: IUnitData;
  Past3Hours: IUnitData;
  Past6Hours: IUnitData;
  Past9Hours: IUnitData;
  Past12Hours: IUnitData;
  Past18Hours: IUnitData;
  Past24Hours: IUnitData;
}

// Диапазон температур
export interface ITemperatureRange {
  Minimum: IUnitData;
  Maximum: IUnitData;
}

export interface ITemperatureSummary {
  Past6HourRange: ITemperatureRange;
  Past12HourRange: ITemperatureRange;
  Past24HourRange: ITemperatureRange;
}

export interface IPressureTendency {
  LocalizedText: string;
  Code: string;
}

export interface IMetric {
  Metric: IUnitData;
  Imperial: IUnitData;
}
export interface IUnitData {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface IconInterface {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
}
