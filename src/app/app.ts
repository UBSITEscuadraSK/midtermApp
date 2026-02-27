import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './Component/home/home';
import { Navi } from './Component/navi/navi';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('midtermapp');
}
