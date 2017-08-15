import { Component } from '@angular/core';
import {SiteDataProvider} from "../../providers/site-data/site-data";

@Component({
  selector: 'contact-us',
  templateUrl: 'contact-us.html'
})

export class ContactUsPage {
  constructor(public siteData: SiteDataProvider){}
  pageTitle: string = 'Contact Us';
  siteName = this.siteData.siteName;
  appVersion = this.siteData.appVersion;
}
