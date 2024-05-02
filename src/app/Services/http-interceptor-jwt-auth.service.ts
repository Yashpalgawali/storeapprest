import { Injectable } from '@angular/core';
import { JwtAuthServiceService } from './jwt-auth-service.service';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
 
  export class HttpInterceptorJwtAuthService implements HttpInterceptor {
  constructor( private jwtAuthenticationService : JwtAuthServiceService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler  )
  {
    let jwtAuthHeaderString = 'Bearer '+localStorage.getItem('token')
    alert('inside interceptor \n Token = '+jwtAuthHeaderString)
    let username = this.jwtAuthenticationService.getAuthenticatedUser()
    if(jwtAuthHeaderString) 
    { 
        request = request.clone({
        setHeaders : { 
          Authorization : `${jwtAuthHeaderString}`
        }
      })
      return next.handle(request);
    }  
   
    return next.handle(request); 
  }
} 
