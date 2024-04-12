import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BASE_URL } from '@core/injectTokens';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);

  private readonly baseUrl = inject(BASE_URL);

  get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${path}`, { params });
  }
}
