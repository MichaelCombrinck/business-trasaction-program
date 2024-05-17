import { Component, EventEmitter, Output } from '@angular/core';
import { Bill } from '../../interfaces/bill-interface';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-bill-selection',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './bill-selection.component.component.html',
  styleUrl: './bill-selection.component.component.scss'
})
export class BillSelectionComponentComponent {

  @Output() billSelected = new EventEmitter<Bill[]>();

  BillsFormGroup:FormGroup = new FormGroup(
    {
      amountPaid: new FormControl('0', Validators.required),
      // tenCents: new FormControl('0', Validators.required),
      // fiftyCents: new FormControl('0', Validators.required),
      // oneRand: new FormControl('0', Validators.required),
      // fiveRand: new FormControl('0', Validators.required),
      // tenRand: new FormControl('0', Validators.required),
      // fiftyRand: new FormControl('0', Validators.required),
      // twoHundredRand: new FormControl('0', Validators.required),
    }
  )

  bills: Bill[] = [
    { denomination: 0.10, value: 0.10, isCent: true, isRand: false },
    { denomination: 0.50, value:  0.50, isCent: true, isRand: false },
    { denomination: 1, value: 1, isCent: false, isRand: true },
    { denomination: 5, value: 5 , isCent: false, isRand: true },
    { denomination: 10, value: 10 , isCent: false, isRand: true },
    { denomination: 50, value: 50, isCent: false, isRand: true },
    { denomination: 200, value: 200, isCent: false, isRand: true }
  ];

  constructor() {
    this.BillsFormGroup = new FormGroup({});
    this.bills.forEach(bill => {
      const controlName = this.getControlName(bill.denomination);
      this.BillsFormGroup.addControl(controlName, new FormControl(bill.value, Validators.required));
    });
  }

  getControlName(denomination: number): string {
    return `bill${denomination}`.replace('.', '');
  }

  onBillChange() {
    this.bills.forEach(bill => {
      const controlName = this.getControlName(bill.denomination);
      bill.value = this.BillsFormGroup.get(controlName)?.value || 0;
    });
    this.billSelected.emit(this.bills);
  }

  isRand(bill: Bill): boolean {
    return bill.isRand as boolean;
  }
}
