import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './MyComponents/product/addproduct/addproduct.component';
import { ViewproductComponent } from './MyComponents/product/viewproduct/viewproduct.component';
import { AddcustomerComponent } from './MyComponents/Customer/addcustomer/addcustomer.component';
import { ViewcustomersComponent } from './MyComponents/Customer/viewcustomers/viewcustomers.component';

const routes: Routes = [
  {path : "product" ,component : AddproductComponent,pathMatch : 'full'},
  {path : "viewproduct" ,component : ViewproductComponent},
  {path : "addcustomer" ,component : AddcustomerComponent},
  {path : "viewcustomers" ,component : ViewcustomersComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
