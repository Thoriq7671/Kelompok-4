import { Component, ViewChild } from '@angular/core';
//import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import { Platform, MenuController, Nav } from 'ionic-angular';

//import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
// import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
//import { SignupPage } from '../pages/signup/signup';
//import { HomePage } from '../pages/home/home';
import { Tab1Page } from '../pages/tab1/tab1';
import { Tab2Page } from '../pages/tab2/tab2';
import { SpecialPage } from '../pages/special/special';
//import { Done1Page } from '../pages/done1/done1';
//import { Done2Page } from '../pages/done2/done2';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = LoginPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen

  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Lapor Sampah', component: Tab1Page },
      { title: 'Panggil Petugas', component: Tab2Page },
      { title: 'Pengaturan', component: SpecialPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
  
}
