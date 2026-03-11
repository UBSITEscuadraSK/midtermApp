import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navi } from './Component/navi/navi';
import { Products } from './Component/products/products';
import { ProductList } from './Component/products/product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navi, Products, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('midtermapp');
}
