import { Component } from '@angular/core';
import { BasicAuthServiceService } from './Services/basic-auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'storeapp';
  isLoggedIn : any
  constructor(private authserv : BasicAuthServiceService) { 
    
    this.isLoggedIn = authserv.getAuthenticatedUser()
    
  }


}
