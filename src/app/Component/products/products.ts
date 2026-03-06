import { Component } from '@angular/core';
import { Product } from '../../models/products.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})

export class Products {
  selectedProduct: Product | null = null;
  showModal: boolean = false;

  products: Product[] = [
    { id: 1, name: 'Wireless Mouse', category: 'Electronics', price: 25.99, stock: 50, status: 'In Stock', description:'mouse' },
    { id: 2, name: 'Yoga Mat', category: 'Fitness', price: 19.50, stock: 5, status: 'Low Stock', description: 'mat'},
    { id: 3, name: 'Coffee Maker', category: 'Kitchen', price: 89.00, stock: 12, status: 'In Stock', description: 'coffee maker'},
    { id: 4, name: 'Desk Lamp', category: 'Home Office', price: 34.99, stock: 0, status: 'Out of Stock', description: 'Lamp'},
    { id: 5, name: 'Running Shoes', category: 'Apparel', price: 120.00, stock: 25, status: 'In Stock', description: 'Shoes'},
    { id: 6, name: 'Bluetooth Speaker', category: 'Electronics', price: 45.00, stock: 3, status: 'Low Stock', description: 'Speaker'},
    { id: 7, name: 'Stainless Steel Pan', category: 'Kitchen', price: 55.25, stock: 18, status: 'In Stock', description: 'Pan'},
    { id: 8, name: 'Gaming Chair', category: 'Furniture', price: 199.99, stock: 0, status: 'Out of Stock', description: 'Chair'},
    { id: 9, name: 'Water Bottle', category: 'Fitness', price: 12.99, stock: 100, status: 'In Stock', description: 'Bottle'},
    { id: 10, name: 'Leather Wallet', category: 'Accessories', price: 40.00, stock: 8, status: 'In Stock', description: 'Wallet'}
  ];

  viewProductDetails(p: Product) {
    this.selectedProduct = p;
    this.showModal = true;
  }

}
