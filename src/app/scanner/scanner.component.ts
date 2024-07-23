import { Component } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BarcodeFormat } from '@zxing/library';


@Component({
  selector: 'app-scanner',
  standalone: true,
  imports: [ZXingScannerModule],
  templateUrl: './scanner.component.html',
  styleUrl: './scanner.component.scss'
})
export class ScannerComponent {

  allowedFormats = [ BarcodeFormat.AZTEC, BarcodeFormat.CODABAR, BarcodeFormat.CODE_39, BarcodeFormat.CODE_93,BarcodeFormat.CODE_128,BarcodeFormat.DATA_MATRIX,BarcodeFormat.EAN_8,BarcodeFormat.EAN_13,BarcodeFormat.ITF,BarcodeFormat.MAXICODE,BarcodeFormat.PDF_417,BarcodeFormat.QR_CODE,BarcodeFormat.RSS_14,BarcodeFormat.RSS_EXPANDED,BarcodeFormat.UPC_A,BarcodeFormat.UPC_E,BarcodeFormat.UPC_EAN_EXTENSION ];


  scanSuccessHandler(event: any): void {
    console.log(event);
  }

}
