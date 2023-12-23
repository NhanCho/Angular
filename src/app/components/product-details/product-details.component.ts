import { Component, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
 
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute){}

  @Input() id: string ='';
 
  product :any = {};

  ngOnInit(){

    this.product = this.productService.getProductById(this.id);
  }
}
