import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtAuthServiceService } from 'src/app/Services/jwt-auth-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  response : any
  constructor(private jwtauthserv : JwtAuthServiceService,private router : Router){ }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this.jwtauthserv.logout()              

    this.response="Logged Out Successfully"
    sessionStorage.setItem('response',this.response)
    this.router.navigate(['login'])
  }
  
}
