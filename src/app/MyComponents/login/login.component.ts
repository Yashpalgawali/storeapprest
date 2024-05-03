import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/Models/Login';
import { BasicAuthServiceService } from 'src/app/Services/basic-auth-service.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  response  : any;
  reserr    : any;
  login     : Login = new Login()
  constructor(private authserv  : BasicAuthServiceService,
              private loginserv : LoginService,
              private router    : Router) { }

Login(){
 this.loginserv.login(this.login.username,this.login.password).subscribe({
    next : (data)=> {
        alert('successful')
        this.router.navigate(['viewproduct']).then(()=>{
        window.location.reload()
      })
    },
    error :(e)=> {
      this.reserr="Invalid Username or Password"
      setTimeout(() => {
        this.reserr=""
      }, 4000);
      this.router.navigate(['login'])
    }
 })
}

}
 