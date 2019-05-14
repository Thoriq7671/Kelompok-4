import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
<<<<<<< HEAD
import { AngularFireDatabase, FirebaseListObservable, _getAngularFireDatabase  } from 'angularfire2/database';
=======
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database';
>>>>>>> 68d39b28e5234c7be2c1f13c2edfa0c0411de686
//import { Tab1Page } from '../pages/tab1/tab1';
import { dataDiriItem } from '../../models/data-diri/data-diri.interface';
import { EditProfilePage } from '../editprofil/editprofil';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilePage {
  dataDiriItemRef$: FirebaseListObservable<dataDiriItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController ) {

<<<<<<< HEAD
    this.dataDiriItemRef$ = this.database.list(`profil`);
=======
    this.dataDiriItemRef$ = this.database.list(`profilee`);
>>>>>>> 68d39b28e5234c7be2c1f13c2edfa0c0411de686
    //this.dataDiriRef$.subscribe(x => console.log(x));
  }

  selectProfile(dataDiriItem: dataDiriItem) {
    this.actionSheetCtrl.create({
      title: `${dataDiriItem.Nama}`,
      buttons: [
        {
          text: 'Edit',
          handler: () =>  {
            this.navCtrl.push(EditProfilePage, { dataDiriId: dataDiriItem.$key });
          }
        }
      ]
    }).present();
  }

<<<<<<< HEAD
 // this.userinfo = this.afs.doc(`user/${user.getUID()}`)

  //_getAngularFireDatabase(){
    //this.return.user.uid
  //}

=======
>>>>>>> 68d39b28e5234c7be2c1f13c2edfa0c0411de686
}
