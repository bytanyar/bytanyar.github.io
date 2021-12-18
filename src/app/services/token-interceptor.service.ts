import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiCatService } from './cats.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public catCall: ApiCatService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        'x-api-key': `84045bbd-b25f-4a21-9ad8-46b7acaa293f`
      }
    });
    return next.handle(request);
  }
}