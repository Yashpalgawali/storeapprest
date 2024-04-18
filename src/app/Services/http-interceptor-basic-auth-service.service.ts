import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthServiceService } from './basic-auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthServiceService implements HttpInterceptor {

  constructor( private basicAuthenticationService : BasicAuthServiceService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler)
  {
   //  let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let basicAuthHeaderString =  sessionStorage.getItem('token')
    let username = this.basicAuthenticationService.getAuthenticatedUser()

     if(basicAuthHeaderString)
      {request = request.clone({
      setHeaders : {
          Authorization : `${basicAuthHeaderString}`
        }
      })
  
      return next.handle(request);
    }
    return next.handle(request);
    // request = request.clone({
    //     setHeaders : {
    //         Authorization : `${basicAuthHeaderString}`
    //       }
    //     })
    
    // return next.handle(request);
     
  
  }
} 
