import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let produto_key_name = "produtos";
let lista_produto_key_name = 'lista_produtos';
@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  produto: any;
  count: any = 1;
  parcela: number;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController) {
  }

  
  ionViewDidLoad() {
    this.produto = this.navParams.get("produto");
    this.parcela = this.produto.preco / 12;
    console.log('ionViewDidLoad ProductPage');
  }
  getProduto(){
    return JSON.parse(localStorage.getItem(produto_key_name));
  }
  getListaProduto(){
    return JSON.parse(localStorage.getItem(lista_produto_key_name));
  }
  addProduto(produto_id, lista){
    let listaIndex = this.findIndexListaProduto(lista);
    this.updateListaProduto(listaIndex, [produto_id, this.count]);
    //localStorage.setItem(lista_produto_key_name, JSON.stringify(iten));
    //this.presentToast();
  }
  updateListaProduto(lista_index, produto_id){
    let produtos = this.getListaProduto();
    produtos[lista_index].produtos.push(produto_id);
    console.log(produtos[lista_index].produtos);
    localStorage.setItem(lista_produto_key_name, JSON.stringify(produtos));
  }
  findIndexListaProduto(id){
    let itens = this.getListaProduto();
    if(!itens){
      return false;
    }
    for (let i = 0; i < itens.length; i++) {
       if(itens[i].id == id){
          return i;
       }
    }
    return false;
  }
  itensActionSheet(produto){
    let itens = this.getListaProduto();
    let newItens = [];
    for (let i = 0; i < itens.length; i++) {
        newItens.push(
          {
            text: itens[i].nome,
            icon:'cart',
            handler: () => {
              console.log("Item clicado: " + itens[i].id);
              console.log("Id do produto: " + produto.id);
              this.addProduto(produto.id, itens[i].id);
            }
          }
        );
    }
    newItens.push(
      {
        text: "Criar",
        icon: 'add',
        role:"teste",
        handler: () => {
          let teste = "Voce clicou em Criar lista";
          console.log(teste);
          //add lista
        },
        
      }
    );
    newItens.push(
      {
        text: "Cancelar",
        role: "cancel",
        icon: 'close',
        handler: () => {
          console.log("Cancelado");
        }
      }
    );
    return newItens;
  }
  //ActionSheet
  addOnListActionSheet(produto){
    
    let actionSheet = this.actionSheetCtrl.create({
      title: "Escolha uma lista",
      cssClass: 'StyleIcon',
      buttons: this.itensActionSheet(produto)
    });
    actionSheet.present();
  }
  //Contador para preso
  countProduct(btn){
    let num = parseInt(this.count);
    if(btn == 1){
      num += 1;
    }else{
      num -= 1;
    }
    this.count = num;
  }

}
