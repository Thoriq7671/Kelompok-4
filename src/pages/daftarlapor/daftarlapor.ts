import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database';
//import { Tab1Page } from '../pages/tab1/tab1';
import { LaporItem } from '../../models/lapor-sampah/lapor-sampah.interface';
import { EditdaftarlaporPage } from '../editdaftarlapor/editdaftarlapor';
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


  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController ) {

    this.laporItemRef$ = this.database.list('daftarlapor');

  }

  selectLaporItem(laporItem: LaporItem){
    this.actionSheetCtrl.create({
      title: `${laporItem.Nama}`,
      buttons: [
        {
          text: 'Edit',
          handler: () => {
            // to edit
             this.navCtrl.push(EditdaftarlaporPage, {laporItemId: laporItem.$key});
          }
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            // to delete
            this.laporItemRef$.remove(laporItem.$key);
          }
        },
        // {
        //   text: 'Cancel',
        //   role: 'cancel',
        //   handler: () => {
        //     console.log("The user has selected the cancel button");
        //   }
        // },
      ]
    }).present();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaftarlaporPage');
  }

}
