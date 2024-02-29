import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductdashboardComponent } from './productdashboard/productdashboard.component';
import { Route, RouterModule, Routes } from '@angular/router';


const routes:Routes=[
  {path:'',component:ProductdashboardComponent}
]

@NgModule({
  declarations: [
    ProductdashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  //exports:[ProductdashboardComponent]
})
export class ProductDashboardModule {
  constructor(){
    //debugger;
    //console.log("from product dashboard");
  }
 }
