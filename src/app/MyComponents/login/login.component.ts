import { Component } from '@angular/core';
import { Login } from 'src/app/Models/Login';
import { BasicAuthServiceService } from 'src/app/Services/basic-auth-service.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

login : Login = new  Login()
constructor(private authserv : BasicAuthServiceService,private loginserv : LoginService) { }

Login(){
 this.loginserv.login(this.login.username,this.login.password).subscribe({
    complete : ()=> {
      alert('Success')
    },
    error :(e)=> {
      alert('No success')
    }
 })
}

}
 