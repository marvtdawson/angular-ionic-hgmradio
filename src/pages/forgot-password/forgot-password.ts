import { Component } from '@angular/core';
import {SiteDataProvider} from "../../providers/site-data/site-data";

@Component({
  selector: 'forgot-password',
  templateUrl: 'forgot-password.html'
})

export class ForgotPasswordPage{
  constructor(public siteData: SiteDataProvider){}
  pageTitle: string = 'Forgot Password';
  siteName = this.siteData.siteName;
  appVersion = this.siteData.appVersion;

 /*function resetUserPassword(){

  }*/

}
