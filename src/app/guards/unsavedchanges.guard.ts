import { CanDeactivateFn } from '@angular/router';
import { AdduserComponent } from '../components/adduser/adduser.component';

export interface CanComponentLeave{
  canLeave:()=>boolean;
}

// export const unsavedchangesGuard: CanDeactivateFn<AdduserComponent> = (component, currentRoute, currentState, nextState) => {

//   if(component.userName.dirty){
//     return window.confirm('You have some unsaved changes. Are you sure you want to navigate???');
//   }
//   return true;
// };

export const unsavedchangesGuard: CanDeactivateFn<CanComponentLeave> = (component, currentRoute, currentState, nextState) => {

  if(component.canLeave){
    return component.canLeave();
  }
  return true;  
};
