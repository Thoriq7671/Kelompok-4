import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { LaporItem } from '../../models/lapor-sampah/lapor-sampah.interface';

/**
 * Generated class for the EditdaftarpanggilanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editdaftarpanggilan',
  templateUrl: 'editdaftarpanggilan.html',
})
export class EditdaftarpanggilanPage {
  panggilItemSubscription: Subscription;
  panggilItemRef$: FirebaseObjectObservable<LaporItem>;
  panggilItem = {} as LaporItem;

  constructor(private database: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    const panggilItemId = this.navParams.get('panggilItemId');
    console.log(panggilItemId);
    this.panggilItemRef$ = this.database.object(`daftarpanggilan/${panggilItemId}`);

   this.panggilItemSubscription =
    this.panggilItemRef$.subscribe(
      panggilItem => this.panggilItem = panggilItem);
  }

  editPanggilItem(panggilItem: LaporItem){
    this.panggilItemRef$.update(panggilItem);

    this.navCtrl.pop();
  }

  ionViewWillLeave(){
    this.panggilItemSubscription.unsubscribe();
  }

}
