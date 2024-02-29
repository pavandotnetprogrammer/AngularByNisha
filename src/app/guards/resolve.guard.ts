import { inject } from '@angular/core';
import { CanActivateFn, ResolveFn } from '@angular/router';
import { UsersService } from '../services/users.service';

export const resolveGuard: ResolveFn<any> = (route, state) => {
  const userService=inject(UsersService);
  return userService.getAllUsersFromHttpAPI();
};
