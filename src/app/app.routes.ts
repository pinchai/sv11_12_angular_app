import {Routes} from '@angular/router';
import {Cart} from './cart/cart';
import {Home} from './home/home';
import {Contact} from './contact/contact';
import {ProductDetail} from './product-detail/product-detail';

export const routes: Routes = [
  {
    path: "",
    component: Home
  },
  {
    path: "cart",
    component: Cart
  },
  {
    path: "contact",
    component: Contact
  },
  {
    path: "product-detail",
    component: ProductDetail
  }
];
