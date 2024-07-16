import { Component } from '@angular/core';
import { ProductsData } from './productsData';
import { CommonModule } from '@angular/common';
import { IProduct } from './IProduct';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  productsData = ProductsData;


  addToBill(product: IProduct): void {
    console.log(`Title: ${product.title}, Price: ${product.price}, Available: ${product.available}`);
    if (product.available > 0) {
      product.available -= 1;
    } else {
      console.log(`${product.title} is out of stock`);
    }
  }
}
