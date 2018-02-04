import { Component } from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { SiteDataProvider } from "../../providers/site-data/site-data";
import {UniqueDeviceID} from "@ionic-native/unique-device-id";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userUDID: string;

  constructor(public navCtrl: NavController,
              public siteData: SiteDataProvider,
              private platform: Platform,
              private udId: UniqueDeviceID) {

    this.getUdId();
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

  @ViewChild(Slides) slides: Slides;

  goToSlide(){
    this.slides.slideTo(2, 500);
  }

  pageTitle: string = 'Home';
  siteName = this.siteData.siteName;
  appVersion = this.siteData.appVersion;
}
