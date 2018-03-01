import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: 'page-artist-profile',
  templateUrl: 'artist-profile.html',
})
export class ArtistProfilePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtistProfilePage');
  }

}
