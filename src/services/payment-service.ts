import { Injectable } from '@angular/core';
import { Bill, Payment } from '../interfaces/bill-interface';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
    availableBills: Bill[] = [
        { denomination: 0.10, value: 0.10, isCent: true, isRand: false },
        { denomination: 0.50, value: 0.50, isCent: true, isRand: false },
        { denomination: 1, value: 1, isCent: false, isRand: true },
        { denomination: 5, value: 5, isCent: false, isRand: true },
        { denomination: 10, value: 10, isCent: false, isRand: true },
        { denomination: 50, value: 50, isCent: false, isRand: true },
        { denomination: 200, value: 200, isCent: false, isRand: true }
      ];
    
      calculateChange(amountPaid: number, cost: number): Bill[] {
        let change = amountPaid - cost;
        console.log('AmountPaid', amountPaid);
        console.log('Cost ', cost)
        console.log('Change', change)
        let changeBills: Bill[] = [];
    
        if (change <= 0) {
          return changeBills; // No change needed or insufficient payment
        }
    
        for (let bill of this.availableBills.sort((a, b) => b.denomination - a.denomination)) {
          let count = Math.floor(change / bill.denomination);
          if (count > 0) {
            changeBills.push({ denomination: bill.denomination, value: count, isCent: bill.isCent, isRand: bill.isRand });
            change -= count * bill.denomination;
          }
        }
        console.log('This is the amount of change which should be given.', changeBills)
        return changeBills;
      }
    
      validatePayment(amountPaid: number, cost: number): boolean {
        return amountPaid >= cost;
      }
}