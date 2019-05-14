import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
//import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
//import { DaftarlaporPage } from '../daftarlapor/daftarlapor';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { AngularFireDatabase } from 'angularfire2/database';



/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  @ViewChild('username') uname;
  @ViewChild('password') password;  

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
}

  doLogin(){
    if(this.uname.value == "petugas" && this.password.value == "petugas123"){
      this.fire.auth.createUserWithEmailAndPassword(this.uname.value + '@gmail.com', this.password.value)
      .then(data => {
        console.log('got data ', data);
        this.alert('Petugas berhasil masuk!');
        this.navCtrl.setRoot(TabsPage);
    })
    }
    else{
    this.fire.auth.createUserWithEmailAndPassword(this.uname.value, this.password.value)
    .then(data => {
      console.log('got data ', data);
      this.alert('Berhasil terdaftar!');
      this.navCtrl.setRoot(RegisterPage);
    })
    .catch(error => {
      console.log('got an error ', error);
      this.alert(error.message);
    });
    console.log('Would register user with ', this.uname.value, this.password.value);
  }
}
   
  }
