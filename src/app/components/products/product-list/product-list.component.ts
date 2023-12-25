import { Component } from '@angular/core';
import {ProductService} from '../product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  constructor(private productService : ProductService){}

  productData : any;

  ngOnInit(): void {

  console.log("ngonintngonintngonintngonintngonintngonintngonintngonintngonint")
  setTimeout(() => {
    this.productService.getProducts().subscribe(res=>{
      console.log("resresresresresresresresres",res)
      this.productData =res
     })    
  },2000);


  }
}
