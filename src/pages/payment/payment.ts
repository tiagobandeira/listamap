import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  products:any;
  productsIds: Array<number>;
  cartName:String;
  price: Number;
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
  constructor(public navCtrl: NavController, public navParams: NavParams,private payPal: PayPal) {
  }

  ionViewDidLoad() {
    this.productsIds = this.navParams.get("data").cart.produtos;
    this.cartName = this.navParams.get("data").cart.nome;
    this.price = this.navParams.get("data").price;
    this.products = this.getProducts();
    console.log(this.productsIds);
  }
  getProductById(id){
    let product;
    for (let i = 0; i < this.Produtos.length; i++) {
      if(this.Produtos[i].id == id){
        product = this.Produtos[i];
      }
    }
    return product;
  }
  getProducts(){
    let products = [];
    for (let i = 0; i < this.productsIds.length; i++) {
      products.push(this.getProductById(this.productsIds[i][0]));
    }

    return products;
  }
  pag(){
    this.payPal.init({
      PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
      PayPalEnvironmentSandbox: 'M5CFNFZBY77LY'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        let payment = new PayPalPayment('' + this.price, 'USD', 'Teste', 'Tiago');
        this.payPal.renderSinglePaymentUI(payment).then(() => {
          // Successfully paid
    
          // Example sandbox response
          //
          // {
          //   "client": {
          //     "environment": "sandbox",
          //     "product_name": "PayPal iOS SDK",
          //     "paypal_sdk_version": "2.16.0",
          //     "platform": "iOS"
          //   },
          //   "response_type": "payment",
          //   "response": {
          //     "id": "PAY-1AB23456CD789012EF34GHIJ",
          //     "state": "approved",
          //     "create_time": "2016-10-03T13:33:33Z",
          //     "intent": "sale"
          //   }
          // }
        }, () => {
          // Error or render dialog closed without being successful
        });
      }, () => {
        // Error in configuration
      });
    }, () => {
      // Error in initialization, maybe PayPal isn't supported or something else
    });
  
  }
}
