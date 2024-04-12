import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);

  get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.http.get<T>(path, { params });
  }
}
