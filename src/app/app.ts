import {Component, OnInit} from '@angular/core';
import {RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import {Footer} from "./footer/footer";
import {CartService} from './service/cart-service';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    Footer,
    RouterLinkActive,
    JsonPipe,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(public cartService: CartService) {
  }
}
