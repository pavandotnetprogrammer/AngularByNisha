import { CanActivateChildFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateChildFn = (route, state) => {
  const authService=inject(AuthService);
  if(authService.isAdminRole){
    return true;
  }
  else{
    window.alert("Permission denied for this page!!!")
    return false;
  }
};
