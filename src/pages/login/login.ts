import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Login } from '../../models/login';
//firebase
import { AngularFireAuth } from 'angularfire2/auth';
//google-plus
import { GooglePlus } from '@ionic-native/google-plus';
//pages
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [GooglePlus]
})
export class LoginPage {
  loginData = {} as Login;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public googlePlus: GooglePlus,
    public afAuth: AngularFireAuth) {
      this.afAuth.authState.take(1).subscribe(lg => {
        console.log(lg);
        if(lg.uid){
          this.navCtrl.setRoot(TabsPage);
        }
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  //login
  async login(data: Login) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(data.email, data.password);
      if (result) {
        console.log(result);
        this.navCtrl.setRoot(TabsPage);
      }  
    }
    catch (e) {
      console.error(e);
    }
  }
  //register
  async register(data: Login) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(
        data.email,
        data.password
      );
      console.log(result);
      if (result) {
        this.navCtrl.setRoot(TabsPage);
      }
    } catch (e) {
      console.error(e);
    }
  }
  //Login with google plus
  logingGooglePlus(){
    this.googlePlus.login({}).then(res => {
      this.loginData.email = res.email;
      this.loginData.password = res.displayName; + res.userId;
      
      this.register(this.loginData);

    }).catch(e => console.error(e))
  }
}
