import { CanActivateFn, Router } from '@angular/router';
import { AuthUserService } from './auth-user.service';
import { inject } from '@angular/core';

export const guardUserGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthUserService)
  const router = inject(Router)
  if(auth.isAuthenticated()){
    return true}
  else{
    router.navigate(['/signin'])
    return false;}
};
