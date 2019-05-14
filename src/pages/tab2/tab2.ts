import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { LaporItem } from '../../models/lapor-sampah/lapor-sampah.interface';
import {  DaftarpanggilanPage } from '../daftarpanggilan/daftarpanggilan'

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
 //creating new object
 panggilItem = {} as LaporItem

 panggilItemRef$: FirebaseListObservable<LaporItem[]>

 //navCtrl: any;
 //map: any;
 // GoogleAutocomplete: google.maps.places.AutocompleteService;
 // autocomplete: { input: string; };
 // autocompleteItems: any[];

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
   //console.log(panggilItem);
   this.panggilItem = {} as LaporItem;
   this.navCtrl.setRoot('Done2Page');
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
