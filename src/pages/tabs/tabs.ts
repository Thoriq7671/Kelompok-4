import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DaftarlaporPage } from '../daftarlapor/daftarlapor';
import { PengaturanPage } from '../pengaturan/pengaturan';
import { DaftarpanggilanPage } from '../daftarpanggilan/daftarpanggilan';
//import { LoginPage } from '../login/login';
//import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  daftarlaporPage = DaftarlaporPage;
  daftarpanggilanPage = DaftarpanggilanPage;
  settingPage=  PengaturanPage

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
}