import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductComponent } from '../product/product.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  constructor (private productService: ProductService){}
  
  products:any;

  ngOnInit(){
    this.products = this.productService.getProducts();
  }

  deleteProduct(id:number){
    this.productService.removeProduct(id);
    this.products = this.productService.getProducts();
  }

  Buy(product:any){
    this.productService.buyProduct(product);
  }


}
