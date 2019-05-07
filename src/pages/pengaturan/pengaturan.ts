import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  doSignout(){
    // close the menu when clicking a link from the menu
    //this.menu.close(TabsPage);
    // navigate to the new page if it is not the current page
    this.navCtrl.setRoot(LoginPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PengaturanPage');
  }

}
