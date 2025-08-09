import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CurrencyPipe} from '@angular/common';
declare const axios: any;
declare const $: any;
@Component({
  selector: 'app-product-detail',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
  constructor(private route: ActivatedRoute) {}
  product: any = {};

  ngOnInit(): void {
    const product_id = this.route.snapshot.queryParamMap.get('product_id');
    let ng_this = this;
    $.LoadingOverlay("show");
    axios.get(`https://fakestoreapi.com/products/${product_id}`)
      .then(function (response:any) {
        // handle success
        ng_this.product = response.data;
        console.log(ng_this.product);
        $.LoadingOverlay("hide");
      })
      .catch(function (error:any) {
        // handle error
        console.log(error);
      })
  }
}
