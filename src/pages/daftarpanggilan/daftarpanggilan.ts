import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { LaporItem } from '../../models/lapor-sampah/lapor-sampah.interface';
import { EditdaftarpanggilanPage } from '../editdaftarpanggilan/editdaftarpanggilan';

/**
 * Generated class for the DaftarpanggilanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-daftarpanggilan',
  templateUrl: 'daftarpanggilan.html',
})
export class DaftarpanggilanPage {
  panggilItemRef$: FirebaseListObservable<LaporItem[]>


  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController ) {

    this.panggilItemRef$ = this.database.list('daftarpanggilan');

  }

  selectPanggilItem(panggilItem: LaporItem){
    this.actionSheetCtrl.create({
      title: `${panggilItem.Nama}`,
      buttons: [
        {
          text: 'Edit',
          handler: () => {
            // to edit
             this.navCtrl.push(EditdaftarpanggilanPage, {panggilItemId: panggilItem.$key});
          }
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            // to delete
            this.panggilItemRef$.remove(panggilItem.$key);
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
    console.log('ionViewDidLoad DaftarpanggilanPage');
  }

}
