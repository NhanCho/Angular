import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.scss'
})
export class ListProductComponent {
  constructor(private productService: ProductService) {}
  
  products: any;

  ngOnInit(){
    this.products = this.productService.getProducts();
  }

  removeProduct(id:number){
    this.productService.removeProduct(id);
    this.products = this.productService.getProducts();
  }

  buyProduct(product:any){
    this.productService.buyProduct(product);
  }
}
