import { HttpInterceptorFn } from '@angular/common/http';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  const API_Key='test123';
  const request=req.clone({
    setHeaders:{
      API_Key
    }
  });
  return next(request);
};
