import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './MyComponents/product/addproduct/addproduct.component';
import { ViewproductComponent } from './MyComponents/product/viewproduct/viewproduct.component';

const routes: Routes = [
  {path : "addproduct" ,component : AddproductComponent},
  {path : "/" ,component : ViewproductComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
