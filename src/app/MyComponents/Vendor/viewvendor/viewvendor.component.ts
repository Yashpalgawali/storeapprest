import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/Models/Vendor';
import { VendorService } from 'src/app/Services/vendor.service';

@Component({
  selector: 'app-viewvendor',
  templateUrl: './viewvendor.component.html',
  styleUrls: ['./viewvendor.component.css']
})
export class ViewvendorComponent {

  vendorlist : Vendor[] = []
  constructor(private vendserv : VendorService,private router : Router) {}

  ngOnInit(): void {
      this.vendserv.getAllVendors().subscribe({
        next:(data)=> {
          this.vendorlist= data
            this.router.navigate(['viewvendors'])
        },
        error:(err)=> {
            sessionStorage.setItem('reserr','No Vendors Found')
            this.router.navigate(['viewvendors'])
        },
      })
  }

}
