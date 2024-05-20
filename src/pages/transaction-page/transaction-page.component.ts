import { Component } from '@angular/core';
import { PaymentContainerComponent } from '../../components/payment-container/payment-container.component';
import { ProductsContainerComponent } from '../../components/products-container/products-container.component';

@Component({
  selector: 'app-transaction-page',
  standalone: true,
  imports: [PaymentContainerComponent, ProductsContainerComponent],
  templateUrl: './transaction-page.component.html',
  styleUrl: './transaction-page.component.scss'
})
export class TransactionPageComponent {
  
}
