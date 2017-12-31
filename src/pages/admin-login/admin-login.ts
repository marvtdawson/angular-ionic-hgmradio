import { Component } from '@angular/core';
import { SiteDataProvider } from "../../providers/site-data/site-data"

@Component({
  selector: 'admin-login',
  templateUrl: 'admin-login.html'
})

export class AdminLoginPage {
  constructor(public siteData: SiteDataProvider ) {}
  pageTitle = 'Admin Login';
  siteName = this.siteData.siteName;
  appVersion = this.siteData.appVersion;
}
