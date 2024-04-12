import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { API_KEY, BASE_URL } from '@core/injectTokens';

export const ApiKeyInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    url: `${inject(BASE_URL)}/${req.url}`,
    params: req.params.set('apikey', inject(API_KEY)),
  });

  return next(authReq);
};
