import { Component } from '@angular/core';
import { PaymentContainerComponent } from '../../components/payment-container/payment-container.component';
import { ProductsContainerComponent } from '../../components/products-container/products-container.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-transaction-page',
  standalone: true,
  imports: [PaymentContainerComponent, ProductsContainerComponent, RouterModule],
  templateUrl: './transaction-page.component.html',
  styleUrl: './transaction-page.component.scss'
})
export class TransactionPageComponent {
  
}
