import { Component } from '@angular/core';
import { ContactUsPage} from '../contact-us/contact-us';
import { SiteDataProvider } from "../../providers/site-data/site-data"

@Component({
  selector: 'about',
  templateUrl: 'about.html'
})

export class AboutPage {
  constructor(public siteData: SiteDataProvider) {}

  siteName = this.siteData.siteName;
  appVersion = this.siteData.appVersion;
  pageTitle: string = 'About';
  pushContactPage = ContactUsPage;

}
