import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../map/map';

/**
 * Generated class for the CartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let produto_key_name = "produtos";
let lista_produto_key_name = 'lista_produtos';
@IonicPage()
@Component({
  selector: 'page-carts',
  templateUrl: 'carts.html',
})
export class CartsPage {
  public carts;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidEnter() {
    this.carts = this.getProdutoLista();
    console.log('ionViewDidLoad CartPage');
  }
  getProdutoLista(){
    return JSON.parse(localStorage.getItem(lista_produto_key_name));
  }
  openMapPage(cart){
    this.navCtrl.push(MapPage, {cart:cart});
  }

}
