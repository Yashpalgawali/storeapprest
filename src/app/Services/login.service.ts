import { Injectable } from '@angular/core';
import { GlobalComponents } from '../GlobalComponents';
import { HttpClient } from '@angular/common/http';
import { BasicAuthServiceService } from './basic-auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  base_url = GlobalComponents.base_url;
  app_url = this.base_url+"/basicauth"

  constructor(private http : HttpClient,private basicauthserv : BasicAuthServiceService) { }

  public login(username:string , pass : string)
  {
    return this.basicauthserv.executeAuthenticationService(username,pass);
  } 
}
