import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../products/IProduct';

@Component({
  selector: 'app-bill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bill.component.html',
  styleUrl: './bill.component.scss'
})
export class BillComponent {
  @Input() billItems: IProduct[] = [];
  @Output() removeItem = new EventEmitter<IProduct>();

  getTotal(): number {
    return this.billItems.reduce((total, item) => total + item.price, 0);
  }

  removeFromBill(product: IProduct): void {
    this.removeItem.emit(product);
  }
}
