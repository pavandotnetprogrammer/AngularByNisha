import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  const startTime=(new Date()).getTime();
  return next(req).pipe(
    map(event=>{
      if(event instanceof HttpResponse){
        const endTime=(new Date()).getTime();
        const diff=endTime-startTime;
        console.log(event.url+' succeed in '+ diff +' milli seconds');        
      }
      return event;
    })
  );
};
