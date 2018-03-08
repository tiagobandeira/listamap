import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  ILatLng,
  Polyline,
  Spherical,
  BaseArrayClass
} from '@ionic-native/google-maps';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let lista_produto_key_name = 'lista_produtos';
@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  map: GoogleMap;
  distance: string;
  
  productsPoints: Array<ILatLng>;
  productsIds: Array<number>;

  Produtos = [
    {
      id:1, nome:"Violão Elétrico Fender Folk Dreadnought Cd-60 Mahogany Case ",
      preco: 2.145,
      descricao: "Violão Elétrico Fender Folk Dreadnought CD-60 CE All Mahogany com Case 096 1590 O Violão CD-60 eletroacústico estilo dreadnought oferece muita qualidade em sua sonoridade. Com um primoroso acabamento Natural Mahogany, o instrumento vem acompanhado de um case 'hard-shell'. O CD-60 combina o tampo laminado, com laterais e fundo em Mahogany, para uma sonoridade extremamente quente e encorpada.",
      imagem: "../../assets/imgs/violao-fender.jpg",
      latitude: 23.331870,
      longitude: -103.031179
    },
    {
      id:2,
      nome:"Carregador",
      preco:90,
      descricao: "Este é um carregador para notbook",
      imagem: "../../assets/imgs/carregador.jpg",
      latitude: 22.331870,
      longitude: -102.031179
    },
    {
      id:3,
      nome:"Fone de Ouvido",
      preco:30,
      descricao: "Este é um fone de ouvido",
      imagem: "../../assets/imgs/fone.jpg",
      latitude: 21.331870,
      longitude: -100.031179
    },
    {
      id:4,
      nome:"Pedaleira",
      preco:30,
      descricao: "Pedaleira para guitarra",
      imagem: "../../assets/imgs/fone.jpg",
      latitude: 21.331870,
      longitude: -100.031179
    },
    {
      id:5,
      nome:"Bateria",
      preco:30,
      descricao: "Bateria acustica",
      imagem: "../../assets/imgs/fone.jpg",
      latitude: 20.331870,
      longitude: -100.031179
    },
    {
      id:6,
      nome: "iPhone X", 
      fabricante: "Apple", 
      preco: 6000.0, 
      descricao: "O iPhone de 10 anos.",
      genero: "Hardware", 
      latitude: 37.331870, 
      longitude: -122.031179, 
      imagem: "../assets/imgs/iphonex.jpg"
    },
    {
      id:7,
      nome: "Wireless Studio³", 
      fabricante: "Beats by Dr. Dree", 
      preco: 2100.0, 
      descricao: "Fone de ouvidos para estúdio.",
      genero: "Hardware", 
      latitude: 36.788994, 
      longitude: -128.031179, 
      imagem: "../assets/imgs/studio3.jpg"
    },
    {
      id:8,
      nome: "AirPods", 
      fabricante: "Apple", 
      preco: 1200.0, 
      descricao: "O fone de ouvidos da Apple.",
      genero: "Hardware", 
      latitude: 35.788994, 
      longitude: -127.031179, 
      imagem: "../assets/imgs/airpods.jpg"
    },
    {
      id:9,
      nome: "Leviathan", 
      fabricante: "Razer", 
      preco: 1700.0, 
      descricao: "SoundBar para Gamers.",
      genero: "Hardware", 
      latitude: 34.788994, 
      longitude: -126.031179, 
      imagem: "../assets/imgs/leviathan.png"
    },
    {
      id:10,
      nome: "Z8 G4", 
      fabricante: "HP", 
      preco: 15000.0, 
      descricao: "WorkStation para Desenvolvedores.",
      genero: "Hardware", 
      latitude: 33.788994, 
      longitude: -125.031179, 
      imagem: "../assets/imgs/z8-g4.png"
    },
    {
      id:11,
      nome: "Les Paul", 
      fabricante: "Gibson", 
      preco: 123, 
      descricao: "...",
      genero: "Instrumentos Músicais", 
      latitude: 32.788994, 
      longitude: -125.031179, 
      imagem: "../assets/imgs/guitarra-gibson.jpg"
    },
    {
      id:12,
      nome: "Google Pixel 2", 
      fabricante: "HTC", 
      preco: 3000.0, 
      descricao: "O smartphone do Google.",
      genero: "Hardware", 
      latitude: 37.422300, 
      longitude: -122.083649, 
      imagem: "../assets/imgs/pixel-2.png"
    },
    {
      id:13,
      nome: "Dicionário Aurélio", 
      fabricante: "Positivo", 
      preco: 40.0, 
      descricao: "Definições de palavras.",
      genero: "Livros", 
      latitude: 31.788994, 
      longitude: -121.083649 , 
      imagem: "../assets/imgs/dic-aur.jpg"
    },
    {
      id:14,
      nome: "Blue Label", 
      fabricante: "Johnnie Walker", 
      preco: 1000.0, 
      descricao: "Uma boa bebida.",
      genero: "Bebidas", 
      latitude: 37.788636, 
      longitude: -122.447206, 
      imagem: "../assets/imgs/blue-label.jpg"
    },
    {
      id:15,
      nome: "Model M", 
      "fabricante": "Steinway & Sons", 
      "preco": 100000.0, 
      "descricao": "Piano para quarto",
      "genero": "Instrumentos Músicais", 
      "latitude":  30.788994, 
      "longitude": -120.083649, 
      "imagem": "../assets/imgs/model-m.jpg"
    },
    {
      id:16,
      nome: "Box Harry Potter", 
      fabricante: "Zahar", 
      preco: 200.0, 
      descricao: "A série completa.",
      genero: "Livros", 
      latitude: 37.788994, 
      longitude: -122.444895, 
      imagem: "../assets/imgs/box-hp.jpg"
    },
    {
      id:17,
      nome: "Batman Arkham Knight", 
      "fabricante": "Warner Studios", 
      "preco": 125.0, 
      "descricao": "O último jogo da franquia.",
      "genero": "Jogos virtuais", 
      "latitude":  30.788994, 
      "longitude": -121.444895, 
      "imagem": "../assets/imgs/batman-ak.jpg"
    }
  ];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _ngZone: NgZone) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.productsIds = this.navParams.get("cart").produtos;
    console.log(this.getProductsPoints());
    this.loadMap();
  }
  loadMap() {
    /*
    let points: Array<ILatLng> = [
      {lat: 33.91636924837674, lng: -118.39605331420898},
      {lat: 33.90205144970967, lng: -118.39639663696288},
      {lat: 33.90190897196702, lng: -118.37905883789062},
      {lat: 33.89471353635718, lng: -118.3787155151367}
    ];*/
    let points: Array<ILatLng> = this.getProductsPoints();
    this.map = GoogleMaps.create('map', {
      camera: {
        target: points
      }
    });
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      return this.map.addPolyline({
        points: points
      });
    })
    .then((polyline: Polyline) => {
      let baseArray: BaseArrayClass<ILatLng> = polyline.getPoints();

      baseArray.mapAsync((point: ILatLng, next: (newElement: any) => void) => {
        this.map.addMarker({
          position: point,
          draggable: true
        }).then(next);
      }).then((markers: Marker[]) => {

        let baseArray2: BaseArrayClass<Marker> = new BaseArrayClass<Marker>(markers);
        baseArray2.forEach((marker: Marker, idx: number) => {
          marker.on('position_changed').subscribe((params) => {
            baseArray.setAt(idx, params[1]);
          });
        });

        // trigger the position_changed event for the first calculation.
        markers[0].trigger('position_changed', null, markers[0].getPosition());
      });

      baseArray.on('set_at').subscribe(() => {
        this._ngZone.run(() => {
          let distanceMeter: number = Spherical.computeLength(baseArray);
          this.distance = (distanceMeter * 0.000621371192).toFixed(2) + " miles";
        });
      });
    });

  }

  //Pegar as coordenadas dos produtos
  getProductsPoints(){
    let points = [];
    for (let i = 0; i < this.productsIds.length; i++) {
      if(this.Produtos[i].id == this.productsIds[i]){
        points.push(
          {
            lat: this.Produtos[i].latitude, 
            lng: this.Produtos[i].longitude
          }
        );
      }
    }

    return points;
  }
  getListaProduto(){
    return JSON.parse(localStorage.getItem(lista_produto_key_name));
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
}
