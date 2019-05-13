import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';

//import { Geolocation } from '@ionic-native/geolocation';


import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';
import { Tab1Page } from '../pages/tab1/tab1';
import { Tab2Page } from '../pages/tab2/tab2';
import { SpecialPage } from '../pages/special/special';
import { TabsPage } from '../pages/tabs/tabs';
//import { Done1Page } from '../pages/done1/done1';
//import { Done2Page } from '../pages/done2/done2';
import { DaftarlaporPage } from '../pages/daftarlapor/daftarlapor';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PengaturanPage } from '../pages/pengaturan/pengaturan';
import { EditdaftarlaporPage } from '../pages/editdaftarlapor/editdaftarlapor';
import { DaftarpanggilanPage } from '../pages/daftarpanggilan/daftarpanggilan';
import { EditdaftarpanggilanPage } from '../pages/editdaftarpanggilan/editdaftarpanggilan';


// const firebaseAuth = {
//   apiKey: "AIzaSyBs0IMZvD4iPdh7fiAocL3KlFRgBp1xcwM",
//   authDomain: "swms-1556079497175.firebaseapp.com",
//   databaseURL: "https://swms-1556079497175.firebaseio.com",
//   projectId: "swms-1556079497175",
//   storageBucket: "",
//   messagingSenderId: "810902154105"
// };


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    SignupPage,
    HomePage,
    Tab1Page,
    Tab2Page,
    SpecialPage,
    TabsPage,
    //Done1Page,
    //Done2Page,
    DaftarlaporPage,
    PengaturanPage,
    EditdaftarlaporPage,
    DaftarpanggilanPage,
    EditdaftarpanggilanPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    SignupPage,
    HomePage,
    Tab1Page,
    Tab2Page,
    SpecialPage,
    TabsPage,
    //Done1Page,
    //Done2Page,
    DaftarlaporPage,
    PengaturanPage,
    EditdaftarlaporPage,
    DaftarpanggilanPage,
    EditdaftarpanggilanPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
