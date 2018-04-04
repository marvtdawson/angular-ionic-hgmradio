import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { SiteDataProvider} from "../../providers/site-data/site-data";

@Component({
  selector: 'page-artist-profile',
  templateUrl: 'artist-profile.html',
})
export class ArtistProfilePage {

  siteName = this.siteData.siteName;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public siteData: SiteDataProvider) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtistProfilePage');
  }

}
