import { Component } from '@angular/core';
import { LoginPage } from '../login/login';
import { SiteDataProvider } from "../../providers/site-data/site-data";

@Component({
  selector: 'register',
  templateUrl: 'register.html'
})

export class RegisterPage{

  // static site data
  siteName = this.siteData.siteName;
  appVersion = this.siteData.appVersion;

  constructor(public siteData: SiteDataProvider,){}
  pageTitle = 'Register';
  pushLoginPage = LoginPage;
}
