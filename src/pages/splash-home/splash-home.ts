import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, Platform } from 'ionic-angular';
//import { Storage } from '@ionic/storage';
import { SiteDataProvider } from "../../providers/site-data/site-data";
import { Network } from "@ionic-native/network";
import { Http, Headers } from "@angular/http";
import { RedditDataProvider } from "../../providers/reddit-data/reddit-data";


declare var navigator: any;
declare var Connection: any;

@IonicPage()
@Component({
  selector: 'page-splash-home',
  templateUrl: 'splash-home.html',
})

export class SplashHomePage {

  loader: any;

  constructor(public siteData: SiteDataProvider,
              public network: Network,
              private navCtrl: NavController,
              public plt: Platform,
              private alertCtrl: AlertController,
              public http: Http,
              public redditService: RedditDataProvider) {

    // show connection alert message
    this.plt.ready().then((readySource) => {

      console.log('Platform ready from', readySource);

      let alert = this.alertCtrl.create({
         title: "Connected",
         subTitle: <string> this.network.type,
         buttons: ["OK"]
       });
       alert.present();
    });
  }

  // static site data
  siteName = this.siteData.siteName;
  appVersion = this.siteData.appVersion;

  ionViewDidLoad(){
    this.redditService.getLocalData();
  }

}
