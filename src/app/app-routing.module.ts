import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './MyComponents/product/addproduct/addproduct.component';
import { ViewproductComponent } from './MyComponents/product/viewproduct/viewproduct.component';
import { AddcustomerComponent } from './MyComponents/Customer/addcustomer/addcustomer.component';
import { ViewcustomersComponent } from './MyComponents/Customer/viewcustomers/viewcustomers.component';
import { AddvendorComponent } from './MyComponents/Vendor/addvendor/addvendor.component';
import { ViewvendorComponent } from './MyComponents/Vendor/viewvendor/viewvendor.component';
import { AddinvoiceComponent } from './MyComponents/Invoice/addinvoice/addinvoice.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { RouteGuardService } from './Services/route-guard.service';
import { LogoutComponent } from './MyComponents/logout/logout.component';

const routes: Routes = [
    {path : "product" ,       component : AddproductComponent,pathMatch : 'full',canActivate : [RouteGuardService]},
    {path : "viewproduct" ,   component : ViewproductComponent, canActivate : [RouteGuardService]},
    {path : "addcustomer" ,   component : AddcustomerComponent, canActivate : [RouteGuardService]},
    {path : "viewcustomers" , component : ViewcustomersComponent,canActivate : [RouteGuardService]},
    {path : "addvendor" ,     component : AddvendorComponent,canActivate : [RouteGuardService]},
    {path : "viewvendors" ,   component : ViewvendorComponent,canActivate : [RouteGuardService]},
    {path : "addinvoice" ,    component : AddinvoiceComponent,canActivate : [RouteGuardService]},
    {path : "" , component : LoginComponent },
    {path : "login" , component : LoginComponent },
    {path : "logout" , component : LogoutComponent ,canActivate : [RouteGuardService]}
    
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 