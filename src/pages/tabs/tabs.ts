import { Component } from '@angular/core';

//import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
//import { HomePage } from '../home/home';
import { ProductsPage } from '../products/products';
import { CartsPage } from '../carts/carts';
import { CartMapPage } from '../cart-map/cart-map';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab0Root = ProductsPage;
  tab1Root = CartsPage;
  tab2Root = CartMapPage;
  //tab3Root = ContactPage;

  constructor() {

  }
}
