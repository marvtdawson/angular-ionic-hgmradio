import { Component } from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';
//import { Storage } from '@ionic/storage';
import { SiteDataProvider } from "../../providers/site-data/site-data";
import { Network } from "@ionic-native/network";
import { Http } from "@angular/http";
/*import { RedditDataProvider } from "../../providers/reddit-data/reddit-data";*/


@IonicPage()
@Component({
  selector: 'page-splash-home',
  templateUrl: 'splash-home.html',
})

export class SplashHomePage {

  // static site data
  siteName = this.siteData.siteName;
  appVersion = this.siteData.appVersion;

  constructor(public siteData: SiteDataProvider,
              public network: Network,
              public plt: Platform,
              /*private alertCtrl: AlertController,*/
              public http: Http) {

    // show connection alert message regarding current platform
    /*this.plt.ready().then((readySource) => {

      console.log('Platform ready from', readySource);

      let alert = this.alertCtrl.create({
         title: "Enter",
         subTitle: <string> this.network.type,
         buttons: ["OK"]
       });
       alert.present();
    });*/
  }

  ionViewDidLoad(){

  }

}
