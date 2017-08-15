import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SiteDataProvider } from "../../providers/site-data/site-data";
import { Media } from '@ionic-native/media';

/**
 * Generated class for the RadioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-radio',
  templateUrl: 'radio.html',
})

export class RadioPage {
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public siteData: SiteDataProvider,
              private media: Media) {

    this.tracks = [
      {title: 'Something About You', artist: 'ODESZA', playing: false, progress: 0},
      {title: 'Run', artist: 'Allison Wonderland', playing: false, progress: 0},
      {title: 'Breathe', artist: 'Seeb Neev', playing: false, progress: 0},
      {title: 'HyperParadise', artist: 'Hermitude', playing: false, progress: 0},
      {title: 'Lifespan', artist: 'Vaults', playing: false, progress: 0},
      {title: 'Stay High', artist: 'Tove Lo', playing: false, progress: 0},
      {title: 'Lean On', artist: 'Major Lazer', playing: false, progress: 0},
      {title: 'They Say', artist: 'Kilter', playing: false, progress: 0}
    ];

    this.currentTrack = this.tracks[0];
  }
  siteName = this.siteData.siteName;
  appVersion = this.siteData.appVersion;

  // Create a Media instance.  Expects path to file or url as argument
  // We can optionally pass a second argument to track the status of the media
  // let file: MediaObject = this.media.create('file.mp3');

  ionViewDidLoad() {
    console.log('ionViewDidLoad RadioPage');
  }

  tracks: any;
  playing: boolean = true;
  currentTrack: any;
  progressInterval: any;

}
