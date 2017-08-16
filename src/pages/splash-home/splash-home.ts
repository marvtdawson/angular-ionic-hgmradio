import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, Platform } from 'ionic-angular';
//import { Storage } from '@ionic/storage';
import { SiteDataProvider } from "../../providers/site-data/site-data";
import {Network} from "@ionic-native/network";

declare var navigator: any;
declare var Connection: any;

@IonicPage()
@Component({
  selector: 'page-splash-home',
  templateUrl: 'splash-home.html',
})

export class SplashHomePage {

  constructor(public siteData: SiteDataProvider,
              public network: Network,
              private navCtrl: NavController,
              public plt: Platform,
              private alertCtrl: AlertController) {}

  // static site data
  siteName = this.siteData.siteName;
  appVersion = this.siteData.appVersion;

  ionViewDidLoad(){

    function checkConnection() {

      this.plt.ready().then(() => {
        let alert = this.alertCtrl.create({
          title: "Connection Status",
          subTitle: <string> this.network.connection,
          buttons: ["OK"]
        });
        this.navCtrl.present(alert);
      });
    }

    checkConnection();
  }

}
