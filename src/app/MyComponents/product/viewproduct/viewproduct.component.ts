import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent {
  constructor(private router : Router,private prodserv : ProductService) {}

  prodlist : Product[] = []
  response : any
  reserr : any
  ngOnInit(): void {
    
    this.prodserv.getAllProducts().subscribe({
        next : (data) =>{
            this.prodlist = data
            if(sessionStorage.getItem('response')!=null)
            {
              this.response = sessionStorage.getItem('response')
              setTimeout(() => {
                sessionStorage.removeItem('response')
                this.response=""
              }, 5000);
            }
            if(sessionStorage.getItem('reserr')!=null)
            {
              this.response = sessionStorage.getItem('reserr')
              setTimeout(() => {
                sessionStorage.removeItem('reserr')
                this.reserr=""
              }, 5000);
            }
        },
    })
  }
}
