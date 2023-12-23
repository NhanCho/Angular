import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products = [
    { id: 1, name: 'Product 1', quantity: 9, price: 500 },
    { id: 2, name: 'Product 2', quantity: 5, price: 400 },
    { id: 3, name: 'Product 3', quantity: 6, price: 800 },
    { id: 4, name: 'Product 4', quantity: 8, price: 100 },
  ]

  getProducts(){
    return this.products;
  }

  getProductById(id: number | string){
    if (typeof id == 'string'){
      id = parseInt(id);
    }

    const product = this.products.find((product)=> product.id === id);
    return product || {};
  }

  removeProduct(id: number){
    this.products = this.products.filter((product)=> product.id !== id);
  }

  buyProduct(product:any){
    if (product.quantity == 0){
      product.quantity = 0;
    }
    else{
      product.quantity--;
    }
  }

}
