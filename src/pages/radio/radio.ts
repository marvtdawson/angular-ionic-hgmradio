import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { SiteDataProvider } from "../../providers/site-data/site-data";
import { Media } from '@ionic-native/media';
import { UniqueDeviceID } from "@ionic-native/unique-device-id";
import { MusicControls } from "@ionic-native/music-controls";

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

  progressInterval: any;
  siteName = this.siteData.siteName;
  appVersion = this.siteData.appVersion;
  tracks: any;
  artistName: string = 'Doujah Raze';
  cdName: string;
  playingStatus: boolean = true;
  currentTrack: any;
  userUDID: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public siteData: SiteDataProvider,
              private media: Media,
              private musicControls: MusicControls,
              private platform: Platform,
              private udId: UniqueDeviceID) {

    this.tracks = [
      {title: 'Destiny', artistName: 'King Biggie', cdName:'UnSigned', playingStatus: false, progress: 0},
      {title: 'Thuggin', artistName: 'S Dot', cdName: 'Top Dawg', playingStatus: false, progress: 0},
      {title: 'Word Play', artistName: 'Verb', cdName:'Verbcabulary', playingStatus: false, progress: 0},
      {title: 'Where You Are', artistName: 'Doujah Raze', cdName:'Hood Love', playingStatus: false, progress: 0},
      {title: 'She\'s Mind', artistName: 'Wayne Starr', cdName:'Nucca Please', playingStatus: false, progress: 0},
      {title: 'Stay High', artistName: 'Tote Mac', cdName:'420', playingStatus: false, progress: 0},
      {title: 'Lean', artistName: 'Major Lazer',cdName:'Plugged', playingStatus: false, progress: 0},
      {title: 'They Say', artistName: 'Spitter', cdName:'Rumors', playingStatus: false, progress: 0}
    ];

    this.currentTrack = this.tracks[0];

    this.getUdId();

  }

  playTrack(track){

    // First stop any currently playing tracks

    for(let checkTrack of this.tracks){

      if(checkTrack.playingStatus){
        this.pauseTrack(checkTrack);
      }

    }

    track.playingStatus = true;
    this.currentTrack = track;

    // Simulate track playing
    this.progressInterval = setInterval(() => {

      track.progress < 100 ? track.progress++ : track.progress = 0;

    }, 1000);

  }

  pauseTrack(track){

    track.playingStatus = false;
    clearInterval(this.progressInterval);

  }

  nextTrack(){

    let index = this.tracks.indexOf(this.currentTrack);
    index >= this.tracks.length - 1 ? index = 0 : index++;

    this.playTrack(this.tracks[index]);

  }

  prevTrack(){

    let index = this.tracks.indexOf(this.currentTrack);
    index > 0 ? index-- : index = this.tracks.length - 1;

    this.playTrack(this.tracks[index]);

  }

  /**
   * Get Device Unique Id
   * @returns {Promise<void>}
   */
  async getUdId()  {
    try {
      await this.platform.ready();

      this.userUDID = await this.udId.get();

    }catch (e) {
      console.error(e);
    }
  }

  // Create a Media instance.  Expects path to file or url as argument
  // We can optionally pass a second argument to track the status of the media
  // let file: MediaObject = this.media.create('file.mp3');

  ionViewDidLoad() {
    console.log('ionViewDidLoad RadioPage');
    const audioPlayer
    if()

  }



}
