import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/products.interface';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProductServices } from '../service/services';



@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule,],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {

  products: Product[] = [];
  returnUrl: string | null = null;
  searchPlaceholder: string = 'Search by name, category, or status.'
  selectedId: number | string | null = null;

  constructor(
    private productService: ProductServices,
    private router: Router
  ){}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }


  getProduct(e:Product): void{
    this.selectedId = e.id;
    this.router.navigate(['prod-list', e.id, 'product-details']);
  }
}
