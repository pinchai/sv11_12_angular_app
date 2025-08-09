import { Component, Input, Output, EventEmitter } from '@angular/core';
import {CurrencyPipe, JsonPipe} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [
    JsonPipe,
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() product: any;
  @Output() onAddToCart:any = new EventEmitter<any>();
  addToCart(product: any) {
    this.onAddToCart.emit(product);
  }
}
