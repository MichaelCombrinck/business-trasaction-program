import { Component, Input } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from '../../services/product-service';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { Product } from '../../interfaces/product-interface';
import { Bill, Payment } from '../../interfaces/bill-interface';
import { PaymentService } from '../../services/payment-service';
import { BillSelectionComponentComponent } from '../bill-selection.component/bill-selection.component.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-payment-container',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule,  MatCardModule,  MatListModule, MatInputModule, BillSelectionComponentComponent, FormsModule],
  templateUrl: './payment-container.component.html',
  styleUrl: './payment-container.component.scss'
})
export class PaymentContainerComponent {

  selectedProducts:Product[] = this._productService.getProducts();
  paid: number = 0;
  amountPaid: number = 0;
  bills: Bill[] = [];
  change: Bill[] = [];

  
  constructor(private _productService: ProductService, private _paymentService: PaymentService) {
  }


  onRemoveItemClick(item:Product) {
    const index = this.selectedProducts.indexOf(item);
    if (index !== -1) {
      this.selectedProducts.splice(index, 1);
      item.quantity = 1;
    }
  }

  onClearBasketClick(): void {
    this.selectedProducts = [];
    window.location.reload();
  }

  getBill() {
    return this._productService.getBillsTotal();
  }

  onBillSelected(bills: Bill[]) {
    this.bills = bills;
    this.amountPaid = bills.reduce((sum, bill) => sum + (bill.denomination * bill.value), 0);
    if (this._paymentService.validatePayment(this.paid, this._productService.getBillsTotal())) {
      this.change = this._paymentService.calculateChange(this.paid, this._productService.getBillsTotal());
    } else {
      this.change = [];
      alert('Total payment does not cover the cost.');
    }
  }
}
