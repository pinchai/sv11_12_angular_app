import {Component} from '@angular/core';
import {Slider} from '../slider/slider';
import {ProductCard} from '../product-card/product-card';
import {CartService} from '../service/cart-service';
import {ProductService} from '../service/product-service';

@Component({
  selector: 'app-home',
  imports: [
    Slider,
    ProductCard
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(public cartService: CartService, public productService: ProductService) {
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

}
