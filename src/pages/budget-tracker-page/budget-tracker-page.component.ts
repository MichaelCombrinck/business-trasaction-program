import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-budget-tracker-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './budget-tracker-page.component.html',
  styleUrl: './budget-tracker-page.component.scss'
})
export class BudgetTrackerPageComponent {
  items: { name: string, amount: number }[] = [];
  newItem: string = '';
  newAmount: number | null = null;
  editIndex: number | null = null;

  addItem() {
    if (this.newItem && this.newAmount !== null) {
      if (this.editIndex !== null) {
        this.items[this.editIndex] = { name: this.newItem, amount: this.newAmount };
        this.editIndex = null;
      } else {
        this.items.push({ name: this.newItem, amount: this.newAmount });
      }
      this.newItem = '';
      this.newAmount = null;
    }
  }

  onEditItemClick(index: number) {
    this.newItem = this.items[index].name;
    this.newAmount = this.items[index].amount;
    this.editIndex = index;
  }

  onDeleteItemClick(index: number) {
    this.items.splice(index, 1);
    if (this.editIndex !== null && this.editIndex >= index) {
      this.editIndex = null;
      this.newItem = '';
      this.newAmount = null;
    }
  }
}
