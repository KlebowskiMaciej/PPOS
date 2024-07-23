import { Component } from '@angular/core';
import { ProductsData } from './productsData';
import { CommonModule } from '@angular/common';
import { IProduct } from './IProduct';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BarcodeFormat } from '@zxing/library';
import { BillComponent } from '../bill/bill.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,ZXingScannerModule,BillComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  productsData = ProductsData;
  showScanner = false;
  billItems: IProduct[] = [];

  addToBill(product: IProduct): void {
    console.log(`Title: ${product.title}, Price: ${product.price}, Available: ${product.available}`);
    if (product.available > 0) {
      product.available -= 1;
      this.billItems.push({...product});
    } else {
      console.log(`${product.title} is out of stock`);
    }
  }

  toggleScanner(): void {
    this.showScanner = !this.showScanner;
  }

  allowedFormats = [
    BarcodeFormat.AZTEC, BarcodeFormat.CODABAR, BarcodeFormat.CODE_39,
    BarcodeFormat.CODE_93, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_8, BarcodeFormat.EAN_13, BarcodeFormat.ITF, BarcodeFormat.MAXICODE,
    BarcodeFormat.PDF_417, BarcodeFormat.QR_CODE, BarcodeFormat.RSS_14, BarcodeFormat.RSS_EXPANDED,
    BarcodeFormat.UPC_A, BarcodeFormat.UPC_E, BarcodeFormat.UPC_EAN_EXTENSION
  ];

  scanSuccessHandler(event: any): void {
    let product = this.productsData.find(p => p.ean === event);
    if (product) {
      console.log(`Title: ${product.title}, Price: ${product.price}, Available: ${product.available}`);
      if (product.available > 0) {
        product.available -= 1;
        this.billItems.push(product);
      } else {
        console.log(`${product.title} is out of stock`);
      }
    } else {
      console.log(`Product with EAN ${event} not found`);``
    }
  }

  removeFromBill(product: IProduct): void {
    const index = this.billItems.findIndex(item => item.ean === product.ean);
    if (index !== -1) {
      this.billItems.splice(index, 1);
      const originalProduct = this.productsData.find(p => p.ean === product.ean);
      if (originalProduct) {
        originalProduct.available += 1;
      }
    }
  }
}
