import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductComponent } from './MyComponents/product/addproduct/addproduct.component';
import { ViewproductComponent } from './MyComponents/product/viewproduct/viewproduct.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AddcustomerComponent } from './MyComponents/Customer/addcustomer/addcustomer.component';
import { ViewcustomersComponent } from './MyComponents/Customer/viewcustomers/viewcustomers.component';
import { AddvendorComponent } from './MyComponents/Vendor/addvendor/addvendor.component';
import { ViewvendorComponent } from './MyComponents/Vendor/viewvendor/viewvendor.component';
import { EditvendorComponent } from './MyComponents/Vendor/editvendor/editvendor.component';
import { EditcustomerComponent } from './MyComponents/Customer/editcustomer/editcustomer.component';
import { EditproductComponent } from './MyComponents/product/editproduct/editproduct.component';
import { AddinvoiceComponent } from './MyComponents/Invoice/addinvoice/addinvoice.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LoginService } from './Services/login.service';
import { HttpJwtInterceptorService } from './Services/http-jwt-interceptor.service';
import { LogoutComponent } from './MyComponents/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    ViewproductComponent,
    AddcustomerComponent,
    ViewcustomersComponent,
    AddvendorComponent,
    ViewvendorComponent,
    EditvendorComponent,
    EditcustomerComponent,
    EditproductComponent,
    AddinvoiceComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
 
  ],
  // providers: [LoginService,Location,
  //   {provide: LocationStrategy, useClass: HashLocationStrategy}
  // ],
  providers: [LoginService,Location, 
    {provide: LocationStrategy, useClass: HashLocationStrategy}, 
    {provide : HTTP_INTERCEPTORS, useClass : HttpJwtInterceptorService , multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
