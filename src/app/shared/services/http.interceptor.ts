import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const apiKey = '8HKRuJwFAZ7CN2er5MPyafmvSIckOtT4';
    request = request.clone({
      setHeaders: {
        'Authorization': `Bearer ${apiKey}`
      }
    })
    return next.handle(request);
  }
}
