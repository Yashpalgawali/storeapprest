import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './MyComponents/product/addproduct/addproduct.component';
import { ViewproductComponent } from './MyComponents/product/viewproduct/viewproduct.component';
import { AddcustomerComponent } from './MyComponents/Customer/addcustomer/addcustomer.component';
import { ViewcustomersComponent } from './MyComponents/Customer/viewcustomers/viewcustomers.component';
import { AddvendorComponent } from './MyComponents/Vendor/addvendor/addvendor.component';
import { ViewvendorComponent } from './MyComponents/Vendor/viewvendor/viewvendor.component';
import { AddinvoiceComponent } from './MyComponents/Invoice/addinvoice/addinvoice.component';

const routes: Routes = [
    {path : "product" ,       component : AddproductComponent,pathMatch : 'full'},
    {path : "viewproduct" ,   component : ViewproductComponent},
    {path : "addcustomer" ,   component : AddcustomerComponent},
    {path : "viewcustomers" , component : ViewcustomersComponent},
    {path : "addvendor" ,     component : AddvendorComponent},
    {path : "viewvendors" ,   component : ViewvendorComponent},
    {path : "addinvoice" ,     component : AddinvoiceComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
