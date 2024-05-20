import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products-container',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, ProductCardComponent],
  templateUrl: './products-container.component.html',
  styleUrl: './products-container.component.scss'
})
export class ProductsContainerComponent {
  selectedProducts: any[] = [];
  

  constructor() { }

  onProductAdded(product: any): void {
    this.selectedProducts.push(product);
  }
}
