import { Component } from '@angular/core';
import { SiteDataProvider } from "../../providers/site-data/site-data";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'subscribe',
  templateUrl: 'subscribe.html'
})

export class SubscribePage {

  constructor(public siteData: SiteDataProvider) {}

  siteName = this.siteData.siteName;
  appVersion = this.siteData.appVersion;
  pageTitle: string = 'About';
  values: any = '';

  showUserKeyedEntry(event: any){
    this.values += event.target.value;
  }
}
