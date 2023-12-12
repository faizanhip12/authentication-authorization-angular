import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProducteRoutingModule } from './product.routing';
import { ProductOffersComponent } from './product-offers/product-offers.component';



@NgModule({
  declarations: [
    // ProductComponent,
    ProductOffersComponent
  ],
  imports: [
    ProducteRoutingModule,
    CommonModule
  ]
})
export class ProductModule { }