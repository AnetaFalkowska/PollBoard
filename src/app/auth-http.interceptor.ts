import { HttpInterceptorFn } from '@angular/common/http';

export const authHttpInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  if (token) {
    const modifiedReg = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    return next(modifiedReg);
  }
  return next(req);
};
