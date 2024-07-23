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
  @Input() billItems: any[] = [];
  @Output() removeItem = new EventEmitter<any>();

  handleSwipe(event: any, item: any): void {
    const direction = event.deltaX;
    if (direction < 0) {
      this.remove(item);
    }
  }

  remove(item: any): void {
    this.removeItem.emit(item);
  }

  getTotal(): number {
    return this.billItems.reduce((total, item) => total + item.price, 0);
  }
}
