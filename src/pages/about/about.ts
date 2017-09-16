import { Component } from '@angular/core';
import { ContactUsPage} from '../contact-us/contact-us';
import { SiteDataProvider } from "../../providers/site-data/site-data"
import {MembersSettingsPage} from "../members/members-settings/members-settings";
import {HomePage} from "../home/home";

@Component({
  selector: 'about',
  templateUrl: 'about.html'
})

export class AboutPage {
  constructor(public siteData: SiteDataProvider) {}

  siteName = this.siteData.siteName;
  appVersion = this.siteData.appVersion;
  pageTitle: string = 'About';
  pushHomePage = HomePage;
  pushContactPage = ContactUsPage;
  pushMemberSettingsPage = MembersSettingsPage;

}
