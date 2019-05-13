import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaporItem } from '../../models/lapor-sampah/lapor-sampah.interface';
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database';

//import { database } from 'firebase';

/**
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {
  //creating new object
  laporItem = {} as LaporItem

  laporItemRef$: FirebaseListObservable<LaporItem[]>

  //navCtrl: any;
  //map: any;
  // GoogleAutocomplete: google.maps.places.AutocompleteService;
  // autocomplete: { input: string; };
  // autocompleteItems: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,  private database: AngularFireDatabase) {
  //   this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
  //   this.autocomplete = { input: '' };
  //   this.autocompleteItems = [];
  this.laporItemRef$ = this.database.list('daftarlapor');
   }

  doLapor(laporItem: LaporItem){
    this.laporItemRef$.push({
      Nama: this.laporItem.Nama,
      Phone: this.laporItem.Phone,
      Lokasi: this.laporItem.Lokasi,
      Keterangan: this.laporItem.Keterangan
    });
    this.laporItem = {} as LaporItem;
    this.navCtrl.setRoot('Done1Page');
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad Tab1Page');
  // }

 

  // ionViewDidEnter(){
  //   //Set latitude and longitude of some place
  //   this.map = new google.maps.Map(document.getElementById('map'), {
  //     center: { lat: -6.556731, lng: 106.725945 },
  //     zoom: 15
  //   });
  // }

  // updateSearchResults(){
  //   if (this.autocomplete.input == '') {
  //     this.autocompleteItems = [];
  //     return;
  //   }
  //   this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
  //   (predictions, status) => {
  //     this.autocompleteItems = [];
  //     this.zone.run(() => {
  //       predictions.forEach((prediction) => {
  //         this.autocompleteItems.push(prediction);
  //       });
  //     });
  //   });
  // }  

}
