import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService=inject(AuthService);
  if(authService.isUserLoggedIn){
    return true;
  }
  else{
    window.alert("Permission denied for this page!!!")
    return false;
  }
  
};
