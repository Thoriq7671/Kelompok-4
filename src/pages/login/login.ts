import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('username') uname;
  @ViewChild('password') password;
  @ViewChild('petugas') petugas;
 
  // public user : string;
  // public password : string;

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
}

  doSignup() {
    this.navCtrl.push(SignupPage);
  }

  doLogin() {
    if(this.uname.value == "petugas" && this.password.value == "petugas123" ){
      this.fire.auth.signInWithEmailAndPassword(this.uname.value + '@gmail.com', this.password.value)
      .then(data => {
        console.log('got data ', data);
        this.alert('Petugas berhasil masuk!');
        this.navCtrl.setRoot(TabsPage);
      })
    }
    else{
    this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.password.value)
      .then(data => {
        console.log('got data ', data);
        this.alert('Berhasil masuk!');
        this.navCtrl.setRoot(HomePage);
      })
      .catch(error => {
        console.log('got an error ', error);
        this.alert(error.message);
      });
      console.log('Would register user with ', this.uname.value, this.password.value);
  }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}