import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaporItem } from '../../models/lapor-sampah/lapor-sampah.interface';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the Tab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {
  panggilItem = {} as LaporItem

  panggilItemRef$: FirebaseListObservable<LaporItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams,  private database: AngularFireDatabase) {
    //   this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    //   this.autocomplete = { input: '' };
    //   this.autocompleteItems = [];
    this.panggilItemRef$ = this.database.list('daftarpanggilan');
     }

  doPanggil(panggilItem: LaporItem){
    this.panggilItemRef$.push({
      Nama: this.panggilItem.Nama,
      Phone: this.panggilItem.Phone,
      Lokasi: this.panggilItem.Lokasi,
      Keterangan: this.panggilItem.Keterangan
    });
    this.panggilItem = {} as LaporItem;
    this.navCtrl.setRoot('Done2Page');
  }

}
