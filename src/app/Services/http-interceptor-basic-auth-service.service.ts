import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthServiceService } from './basic-auth-service.service';

@Injectable({
  providedIn: 'root'
})
//export class HttpInterceptorBasicAuthServiceService implements HttpInterceptor {
  export class HttpInterceptorBasicAuthServiceService  {

  /*constructor( private basicAuthenticationService : BasicAuthServiceService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler)
  {
   alert("intercepted \nToken"+sessionStorage.getItem('token'))
   //  let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let basicAuthHeaderString =  sessionStorage.getItem('token')
    let username = this.basicAuthenticationService.getAuthenticatedUser()
    alert(sessionStorage.getItem('token'))
     if(basicAuthHeaderString)
      {
        request = request.clone({
        setHeaders : {
          Authorization : `${basicAuthHeaderString}`
        }
      })
     
      return next.handle(request);
    }
    alert("Interceptor called\n Auth string = "+basicAuthHeaderString)
    return next.handle(request);
  }*/
} 
