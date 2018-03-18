import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartMapPage } from './cart-map';

@NgModule({
  declarations: [
    CartMapPage,
  ],
  imports: [
    IonicPageModule.forChild(CartMapPage),
  ],
})
export class CartMapPageModule {}
