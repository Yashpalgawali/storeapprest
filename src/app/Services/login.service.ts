import { Injectable } from '@angular/core';
import { GlobalComponents } from '../GlobalComponents';
import { HttpClient } from '@angular/common/http';
import { BasicAuthServiceService } from './basic-auth-service.service';
import { JwtAuthServiceService } from './jwt-auth-service.service';
import { Login } from '../Models/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // base_url = GlobalComponents.base_url;
  // app_url = this.base_url+"/basicauth"

  loginobj : Login = new Login()
  constructor(private http : HttpClient,
              private basicauthserv : BasicAuthServiceService,
              private jwtauth: JwtAuthServiceService) { }

  public login(username:string , pass : string)
  {
    // return this.basicauthserv.executeAuthenticationService(username,pass);
    this.loginobj.username=username
    this.loginobj.password=pass
    //return this.jwtauth.executeJwtAuthenticationService(this.loginobj.username,this.loginobj.password);
    return this.jwtauth.executeJwtAuthenticationService(username,pass);
  } 
}
