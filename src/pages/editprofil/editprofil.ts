import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { dataDiriItem } from '../../models/data-diri/data-diri.interface';
import { Subscription } from 'rxjs/Subscription';
//import { ProfilePage } from '../../pages/profil/profil';

//import { ProfilPageModule } from '../profil/profil.module';

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editprofil',
  templateUrl: 'editprofil.html',
})
export class EditProfilePage {

  dataDiriSubscription: Subscription;
  dataDiriItemRef$: FirebaseObjectObservable<dataDiriItem>
  dataDiriItem = {} as dataDiriItem;

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {

    //capture the dataDiriId as a NavParameter
    const dataDiriId = this.navParams.get('dataDiriId');

    //logout NavParam
    console.log(dataDiriId);

    //set the scope of out Firebase object equal to our selected item
<<<<<<< HEAD
    this.dataDiriItemRef$ = this.database.object(`profil/${dataDiriId}`);
=======
    this.dataDiriItemRef$ = this.database.object(`profilee/${dataDiriId}`);
>>>>>>> 68d39b28e5234c7be2c1f13c2edfa0c0411de686

    //subscribe to the object and assign the result to this.dataDiriItem

    this.dataDiriSubscription = this.dataDiriItemRef$.subscribe(dataDiriItem => this.dataDiriItem = dataDiriItem)
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  //Update our Firebase node with new data
  EditProfile(dataDiriItem: dataDiriItem) {
    this.dataDiriItemRef$.update(dataDiriItem);
    this.alert('Berhasil Mengubah Data!');
    //back to the profile page
    this.navCtrl.pop();
  }

  ionViewWillLeave() {
    this.dataDiriSubscription.unsubscribe();
  }
}
