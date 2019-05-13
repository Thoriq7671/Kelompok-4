import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database';
//import { Tab1Page } from '../pages/tab1/tab1';
import { LaporItem } from '../../models/lapor-sampah/lapor-sampah.interface';
/**
 * Generated class for the DaftarlaporPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-daftarlapor',
  templateUrl: 'daftarlapor.html',
})
export class DaftarlaporPage {
  laporItemRef$: FirebaseListObservable<LaporItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase ) {

    this.laporItemRef$ = this.database.list('daftarlapor');
    //this.laporItemRef$.subscribe(x => console.log(x));

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaftarlaporPage');
  }

}
