import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { LaporItem } from '../../models/lapor-sampah/lapor-sampah.interface';
import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the EditdaftarlaporPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editdaftarlapor',
  templateUrl: 'editdaftarlapor.html',
})
export class EditdaftarlaporPage {

  laporItemSubscription: Subscription;
  laporItemRef$: FirebaseObjectObservable<LaporItem>;
  laporItem = {} as LaporItem;

  constructor(private database: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    const laporItemId = this.navParams.get('laporItemId');
    console.log(laporItemId);
    this.laporItemRef$ = this.database.object(`daftarlapor/${laporItemId}`);

   this.laporItemSubscription =
    this.laporItemRef$.subscribe(
      laporItem => this.laporItem = laporItem);
  }

  editLaporItem(laporItem: LaporItem){
    this.laporItemRef$.update(laporItem);

    this.navCtrl.pop();
  }

  ionViewWillLeave(){
    this.laporItemSubscription.unsubscribe();
  }

}
