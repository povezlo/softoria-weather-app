import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { ILocation } from '@core/models';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { WeatherFacade } from '@features/weather';

import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { EMPTY } from 'rxjs/internal/observable/empty';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
  searchControl = new FormControl('');
  filteredOptions$: Observable<ILocation[]> = EMPTY;

  constructor(private weatherFacade: WeatherFacade) {}

  ngOnInit() {
    this.weatherFacade.loadLocations('london');
    this.filteredOptions$ = this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter((query) => !!query && query.length > 2),
      tap(() => this.weatherFacade.showLoader()),
      withLatestFrom(this.weatherFacade.locations$),
      map(([value, locations]) => this._filteredOptions(value || '', locations))
    );
  }

  private _filteredOptions(query: string, locations: ILocation[]): ILocation[] {
    if (!locations) {
      return [];
    }
    const filterValue = query.toLowerCase();
    console.log('filteredOptions', query, locations);
    return locations.filter((location) =>
      location.LocalizedName.toLowerCase().includes(filterValue)
    );
  }

  onSearch() {
    const query = this.searchControl.value;
    if (typeof query === 'string') {
      this.weatherFacade.loadLocations(query);
    }
  }

  onLocationSelected(event: MatAutocompleteSelectedEvent): void {
    const location = event.option.value as ILocation;
    this.weatherFacade.loadCurrentConditions(location.Key);
    this.weatherFacade.loadFiveDayForecast(location.Key);
  }
}
