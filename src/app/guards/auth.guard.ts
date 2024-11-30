import { CanActivateFn, GuardResult, MaybeAsync, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';

export const authGuard = (): CanActivateFn => {
  return (): MaybeAsync<GuardResult> => {
     const authService = inject(AuthService)
     const route = inject(Router)
    
    return authService.VerifyToken().pipe(
      catchError(() => {
        return route.navigate(['/login']);
      }),
      map((isValid: boolean) => {
        if (!isValid) {
          route.navigate(['/login']); 
          return false;
        }
        return true;
      }
      )
    )
  }
};
