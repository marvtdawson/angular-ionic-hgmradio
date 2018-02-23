import { Component } from '@angular/core';
import {IonicPage, Platform} from 'ionic-angular';
// import { Storage } from '@ionic/storage';
import { SiteDataProvider } from "../../providers/site-data/site-data";
import { Network } from "@ionic-native/network";
import { HttpClientModule } from "@angular/common/http";
import { NetworkAuthProvider} from "../../providers/network-auth/network-auth";

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
              public http: HttpClientModule,
              private networkAuth: NetworkAuthProvider) {

    // show connection alert message regarding current platform
   /* this.plt.ready().then((readySource) => {

      console.log('Platform ready from', readySource);

      let alert = this.alertCtrl.create({
         title: "Enter",
         subTitle: <string> this.network.type,
         buttons: ["OK"]
       });
       alert.present();
    });*/

  }

  ionViewDidLoad() {

    console.log("Splash Page Loaded");

    // 1. network connection
    this.networkAuth.checkNetworkConnection();

    /*this.network.onConnect().subscribe(data => {
      console.log(data);
      }, error => console.error(error));*/

    this.network.onDisconnect().subscribe(data => {
      console.log(data);
      }, error => console.error(error));
  }
}
