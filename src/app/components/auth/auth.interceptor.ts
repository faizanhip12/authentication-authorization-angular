import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Get the token from your authentication service or any other source
    // const token = 'YOUR_ACCESS_TOKEN';

    const token = localStorage.getItem('token')

    // Clone the request and add the Authorization header with the token
    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    console.log("authintrerceptor",authRequest)
    // Pass the cloned request to the next handler
    return next.handle(authRequest);
  }
}
