import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MapPage } from '../map/map';

//firebase
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { PaymentPage } from '../payment/payment';
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
  public valueAll;
  
  Produtos = [
    {
      id:1, nome:"Violão Elétrico Fender Folk Dreadnought Cd-60 Mahogany Case ",
      preco: 2.145,
      descricao: "Violão Elétrico Fender Folk Dreadnought CD-60 CE All Mahogany com Case 096 1590 O Violão CD-60 eletroacústico estilo dreadnought oferece muita qualidade em sua sonoridade. Com um primoroso acabamento Natural Mahogany, o instrumento vem acompanhado de um case 'hard-shell'. O CD-60 combina o tampo laminado, com laterais e fundo em Mahogany, para uma sonoridade extremamente quente e encorpada.",
      imagem: "../../assets/imgs/violao-fender.jpg",
      latitude: -2.9015068,
      longitude: -41.7792374
    },
    {
      id:2,
      nome:"Carregador",
      preco:90,
      descricao: "Este é um carregador para notbook",
      imagem: "../../assets/imgs/carregador.jpg",
      latitude: -2.9087696,
      longitude: -41.7670013
    },
    {
      id:3,
      nome:"Fone de Ouvido",
      preco:30,
      descricao: "Este é um fone de ouvido",
      imagem: "../../assets/imgs/fone.jpg",
      latitude: -2.9087696,
      longitude: -41.7670013
    },
    {
      id:4,
      nome:"Pedaleira",
      preco:30,
      descricao: "Pedaleira para guitarra",
      imagem: "../../assets/imgs/fone.jpg",
      latitude: -2.9090991,
      longitude: -41.7701958
    },
    {
      id:5,
      nome:"Bateria",
      preco:30,
      descricao: "Bateria acustica",
      imagem: "../../assets/imgs/fone.jpg",
      latitude: -2.9090991,
      longitude: -41.7701958
    },
    {
      id:6,
      nome: "iPhone X", 
      fabricante: "Apple", 
      preco: 6000.0, 
      descricao: "O iPhone de 10 anos.",
      genero: "Hardware", 
      latitude: -2.9087696,
      longitude: -41.7670013,
      imagem: "../assets/imgs/iphonex.jpg"
    },
    {
      id:7,
      nome: "Wireless Studio³", 
      fabricante: "Beats by Dr. Dree", 
      preco: 2100.0, 
      descricao: "Fone de ouvidos para estúdio.",
      genero: "Hardware", 
      latitude: -2.9015068,
      longitude: -41.7792374,
      imagem: "../assets/imgs/studio3.jpg"
    },
    {
      id:8,
      nome: "AirPods", 
      fabricante: "Apple", 
      preco: 1200.0, 
      descricao: "O fone de ouvidos da Apple.",
      genero: "Hardware", 
      latitude: -2.9087696,
      longitude: -41.7670013,
      imagem: "../assets/imgs/airpods.jpg"
    },
    {
      id:9,
      nome: "Leviathan", 
      fabricante: "Razer", 
      preco: 1700.0, 
      descricao: "SoundBar para Gamers.",
      genero: "Hardware", 
      latitude: -2.9090991,
      longitude: -41.7701958, 
      imagem: "../assets/imgs/leviathan.png"
    },
    {
      id:10,
      nome: "Z8 G4", 
      fabricante: "HP", 
      preco: 15000.0, 
      descricao: "WorkStation para Desenvolvedores.",
      genero: "Hardware", 
      latitude: -2.9087696,
      longitude: -41.7670013, 
      imagem: "../assets/imgs/z8-g4.png"
    },
    {
      id:11,
      nome: "Les Paul", 
      fabricante: "Gibson", 
      preco: 123, 
      descricao: "...",
      genero: "Instrumentos Músicais", 
      latitude: -2.9090991,
      longitude: -41.7701958, 
      imagem: "../assets/imgs/guitarra-gibson.jpg"
    },
    {
      id:12,
      nome: "Google Pixel 2", 
      fabricante: "HTC", 
      preco: 3000.0, 
      descricao: "O smartphone do Google.",
      genero: "Hardware", 
      latitude: -2.9087696,
      longitude: -41.7670013,  
      imagem: "../assets/imgs/pixel-2.png"
    },
    {
      id:13,
      nome: "Dicionário Aurélio", 
      fabricante: "Positivo", 
      preco: 40.0, 
      descricao: "Definições de palavras.",
      genero: "Livros", 
      latitude: -2.9090991,
      longitude: -41.7701958, 
      imagem: "../assets/imgs/dic-aur.jpg"
    },
    {
      id:14,
      nome: "Blue Label", 
      fabricante: "Johnnie Walker", 
      preco: 1000.0, 
      descricao: "Uma boa bebida.",
      genero: "Bebidas", 
      latitude:-2.9065473, 
      longitude: -41.7786729, 
      imagem: "../assets/imgs/blue-label.jpg"
    },
    {
      id:15,
      nome: "Model M", 
      fabricante: "Steinway & Sons", 
      preco: 100000.0, 
      descricao: "Piano para quarto",
      genero: "Instrumentos Músicais", 
      latitude: -2.9090991,
      longitude: -41.7701958, 
      imagem: "../assets/imgs/model-m.jpg"
    },
    {
      id:16,
      nome: "Box Harry Potter", 
      fabricante: "Zahar", 
      preco: 200.0, 
      descricao: "A série completa.",
      genero: "Livros", 
      latitude: -2.9090991,
      longitude: -41.7701958,
      imagem: "../assets/imgs/box-hp.jpg"
    },
    {
      id:17,
      nome: "Batman Arkham Knight", 
      fabricante: "Warner Studios", 
      preco: 125.0, 
      descricao: "O último jogo da franquia.",
      genero: "Jogos virtuais", 
      latitude: -2.9015068,
      longitude: -41.7792374, 
      imagem: "../assets/imgs/batman-ak.jpg"
    }
  ];
  
  //Produtos;
  produtos: Observable<any[]>;;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    db:AngularFireDatabase,
    public alertCtrl: AlertController,) {
    this.produtos = db.list('produtos').valueChanges();
  }
  
  ionViewDidEnter() {
    this.carts = this.getProdutoLista();
    console.log( this.carts);
  }
  getProdutoLista(){
    return JSON.parse(localStorage.getItem(lista_produto_key_name));
  }
  openMapPage(cart){
    this.navCtrl.push(MapPage, {cart:cart});
  }
  openPaymentPage(cart){
    let data = {
      cart: cart,
      price: this.getPriceAll(cart.id)
    }
    this.navCtrl.push(PaymentPage, {data:data});
  }
  findById(id){
    let i = 0;
    let produto;
    this.produtos.forEach(element => {
      if(id == element[i].id){
        produto =  element[i];
      }
      i += 1;
    });
    return produto;
  }
  findByIdProduto(id){
    let i = 0;
    let produto;
    for (let i = 0; i < this.Produtos.length; i++) {
      if(this.Produtos[i].id == id){
        produto = this.Produtos[i];
      }
    }
    return produto;
  }
  getPrice(produtos){
    let price = 0;
    
    for (let i = 0; i < produtos.length; i++) {
      price += this.findByIdProduto(produtos[i][0]).preco * produtos[i][1];
    }
    this.valueAll = price;
    return price;
  }
  getProducts(cartId){
    let products;
    for (let i = 0; i < this.carts.length; i++) {
      if(this.carts[i].id == cartId){
        products = this.carts[i].produtos;
      }
    }
    return products;
  }
  getProductsFireBase(){
    let i = 0;
    let produtos;
    this.produtos.forEach(element => {
      produtos.push(element[i]);
      console.log(element[i])
      i += 1;
    });
    return produtos;
  }
  //Valor da lista
  getPriceAll(cartId){
    let price = 0;
    let products = this.getProducts(cartId);
    for (let i = 0; i < products.length; i++) {
      price += this.findByIdProduto(products[i][0]).preco * products[i][1];
    }
    return price;
  }
  //adicionar cards
  criarCart(nomeLista){
    //this.navCtrl.push(CriarListaPage);
    let dadosLista = {
      id: 0,
      nome: nomeLista,
      produtos:[]
    };
    let lista;
    if(!JSON.parse(localStorage.getItem(lista_produto_key_name))){
      lista = [dadosLista];
      localStorage.setItem(lista_produto_key_name, JSON.stringify(lista));
    }else{
      lista = JSON.parse(localStorage.getItem(lista_produto_key_name));
      dadosLista.id = lista.length;//adiciona o id
      lista.push(dadosLista);
      localStorage.setItem(lista_produto_key_name, JSON.stringify(lista));
    }
    console.log(dadosLista);
  }
  criarListaAlert(){
    let alert = this.alertCtrl.create(
      {
        title: "Novo carrinho",
        message: "Crie um carrinho de compras",
        inputs: [
          {
            name: "nome",
            placeholder:"Ex: Meu carrinho"
          }
        ],
        buttons: [
          {
            text: "Cancelar",
            handler: data => {
              console.log("Cancelado");
            }
          },
          {
            text: "Criar",
            handler: data => {
              console.log("Lista criada");
              //criar lista
              this.criarCart(data.nome);
              //console.log(data.nome);
            }
          }
        ]
      }
    );
    alert.present();
  }

}
