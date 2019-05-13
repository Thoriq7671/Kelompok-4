import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
// import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the PengaturanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pengaturan',
  templateUrl: 'pengaturan.html',
})
export class PengaturanPage {
  [x: string]: any;
  nav: any;

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public app:App) {
  }

  doSignout(){
    this.app.getRootNav().setRoot(LoginPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PengaturanPage');
  }

}
