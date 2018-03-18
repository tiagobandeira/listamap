import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//firebase
import { AngularFireDatabase } from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import { MapPage } from '../map/map';

/**
 * Generated class for the CartMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let lista_produto_key_name = 'lista_produtos';
@IonicPage()
@Component({
  selector: 'page-cart-map',
  templateUrl: 'cart-map.html',
})
export class CartMapPage {
  produtos: Observable<any[]>;
  carts
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public db:AngularFireDatabase
  ) {
  }
  ionViewDidEnter() {
    this.carts = this.getProdutoLista();
    console.log('ionViewDidLoad CartMapPage');
  }
  getProdutoLista(){
    return JSON.parse(localStorage.getItem(lista_produto_key_name));
  }
  openMapaPage(cart){
    this.navCtrl.push(MapPage, {cart:cart});
  }
}
