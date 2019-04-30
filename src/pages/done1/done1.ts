import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Tab1Page } from '../tab1/tab1';

/**
 * Generated class for the Done1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-done1',
  templateUrl: 'done1.html',
})
export class Done1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Done1Page');
  }

  doBack(){
    this.navCtrl.setRoot(HomePage);
  }

  doBackk(){
    this.navCtrl.setRoot(Tab1Page);
  }

}
