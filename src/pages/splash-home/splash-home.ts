import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SiteDataProvider } from "../../providers/site-data/site-data";

@IonicPage()
@Component({
  selector: 'page-splash-home',
  templateUrl: 'splash-home.html',
})

export class SplashHomePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public secureStorage: Storage,
              public siteData: SiteDataProvider) {
  }

  // static site data
  siteName = this.siteData.siteName;
  appVersion = this.siteData.appVersion;


  getData() {
    console.log('Get Name');
  }

}
