import { Component } from '@angular/core';
import { Product } from '../../../models/products.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  selectedProduct: Product | null = null;
  showModal: boolean = false;

  viewProductDetails(p: Product) {
    this.selectedProduct = p;
    this.showModal = true;
  }
}
