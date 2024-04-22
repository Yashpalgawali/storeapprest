import { Injectable } from '@angular/core';
import { GlobalComponents } from '../GlobalComponents';
import { HttpClient } from '@angular/common/http';
import { AuthenticationBean } from '../Models/AuthenticationBean';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class JwtAuthServiceService {
  constructor(private http: HttpClient) { }
  app_url = GlobalComponents.base_url;
  base_url= this.app_url;
  
  executeAuthenticationService(username:any, password:any) {
  
    
     return this.http.get<AuthenticationBean>(`${this.base_url}basicauth`).pipe(
                    map(
                      data=>{
                           
                              
                              return data;
                        }
                    ));
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticatedUser')
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem('token')
    else
      return
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('token')
        return !(user === null)
  }

  logout() {
    
    sessionStorage.removeItem('authenticatedUser')
    sessionStorage.removeItem('token')
  }
}
