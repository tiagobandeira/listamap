import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps } from '@ionic-native/google-maps';
import { MapPage } from '../pages/map/map';
import { ProductsPage } from '../pages/products/products';
import { ProductPage } from '../pages/product/product';
import { CartsPage } from '../pages/carts/carts';
import { LoginPage } from '../pages/login/login';
import { PaymentPage} from '../pages/payment/payment';
import { CartMapPage } from '../pages/cart-map/cart-map';

//firebase
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { firebase } from '../credentials/firebase';

//Paypal
import { PayPal } from '@ionic-native/paypal';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MapPage,
    ProductsPage,
    ProductPage,
    CartsPage,
    LoginPage,
    PaymentPage,
    CartMapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase.config),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MapPage,
    ProductsPage,
    ProductPage,
    CartsPage,
    LoginPage,
    PaymentPage,
    CartMapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GoogleMaps,
    PayPal
  ]
})
export class AppModule {}
