import { Component } from '@angular/core';
import { Invoice } from 'src/app/Models/Invoice';
import { Product } from 'src/app/Models/Product';
import { Temp_Invoice } from 'src/app/Models/Temp_Invoice';
import { InvoiceService } from 'src/app/Services/invoice.service';
import { ProductService } from 'src/app/Services/product.service';
import { TempinvoiceService } from 'src/app/Services/tempinvoice.service';
//import $ from 'jquery';

@Component({
  selector: 'app-addinvoice',
  templateUrl: './addinvoice.component.html',
  styleUrls: ['./addinvoice.component.css']
})
export class AddinvoiceComponent {

  invoice : Invoice = new Invoice()
  tempinvoice : Temp_Invoice = new Temp_Invoice()
  prodlist : Product[] = []
  tempinvlist : Temp_Invoice[] = []

  constructor(private invserv : InvoiceService,
              private teinvserv : TempinvoiceService,
              private prodserv: ProductService){ }

  ngOnInit(): void {

    this.prodserv.getAllProducts().subscribe({
      next:(data)=>{
        this.prodlist=data
      }
    })

  //   $('#unit_price').focusout(function(){
				
  //     let gst = (18/100)+1;
  //     alert(gst)
  //     // let res = $(this).val() / gst;
  //     // alert("price after applying 18% gst "+res);
     
  // });
  }

  onFocusOutEvent(event: any)
  {
    let gst = (18/100)+1;
    let res = event.target.value / gst;
    (<HTMLInputElement>document.getElementById("unit_price")).value = ""+res;
  }
  saveTempInvoice() { 
          alert(JSON.stringify(this.tempinvoice))
  }

}
