import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from 'src/app/features/auth/services/auth.service';

@Injectable()
export class AuthErrorInterceptor implements HttpInterceptor {
  private readonly authService = inject(AuthService);

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

  return next.handle(request).pipe(
    catchError((error: HttpErrorResponse) => {
        if (this.isAuthError(error)) {
          this.authService.logout();
        }

        return throwError(() => error);
      })
    // catchError((error: HttpErrorResponse) => {

    //   if (error.status === 401 || error.status === 402) {
    //     // Clear user data
    //     this.authService.logout();
    //   }

    //   return throwError(() => error);
    // })
  );
  }

  private isAuthError(error: HttpErrorResponse): boolean {
    // Standard auth-failure status codes
    if (error.status === 401 || error.status === 403) {
      return true;
    }

    // Some backends (like this one) return 500 with a JWT error name in the body
    const errorName = error.error?.additionalInfo?.name ?? error.error?.name;
    const jwtErrorNames = ['TokenExpiredError', 'JsonWebTokenError', 'NotBeforeError'];

    return jwtErrorNames.includes(errorName);
  }

}



