import { Component, EventEmitter, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Product } from '../../interfaces/product-interface'
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports:  [MatCardModule, MatButtonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  products:Product[] = [
    {
      name: 'Apple',
      amount: 10,
      image: 'assets/images/apple.jpg',
      quantity: 1,
    },
    {
      name: 'Steak',
      amount: 20,
      image: 'assets/images/steak-product.jpg',
      quantity: 1,
    },
    {
      name: 'Banana',
      amount: 30,
      image: 'assets/images/banana.jpg',
      quantity: 1,
    },
    {
      name: 'Chops',
      amount: 40,
      image: 'assets/images/chops-product.png',
      quantity: 1,
    },
    {
      name: 'Fish',
      amount: 50,
      image: 'assets/images/fish-product.png',
      quantity: 1,
    },
    {
      name: 'Milk',
      amount: 60,
      image: 'assets/images/milk-product.jpg',
      quantity: 1,
    }
  ];

  private productAddedList:Product[] = [];

  constructor(private _productService: ProductService) { 
    
  }

  ngOnInit(): void {}

  onAddProductClick(product: any): void {
    const listOfProducts = this._productService.getProducts();
    const isDuplicated = this.isDuplicateProduct(listOfProducts,product);
    if (isDuplicated) {
      this.productAddedList.push(product)
      this._productService.setQuantityOfProduct(product);
      this._productService.increaseAmount();
      this._productService.setBillTotal(this.productAddedList);
      return;
    }
    else {
      this.productAddedList.push(product);
      this._productService.addProduct(product);
      this._productService.increaseAmount();
      this._productService.setBillTotal(this.productAddedList);
    }
  }

  isDuplicateProduct<T>(productList:T[], value: T) {
    return productList.includes(value)
  }

  
}
