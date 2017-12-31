import { Component } from '@angular/core';
import {SiteDataProvider} from "../../providers/site-data/site-data";

@Component({
  selector: "gallery",
  templateUrl: "gallery.html"
})

export class GalleryPage {
  constructor(public siteData: SiteDataProvider) {}
  pageTitle: string = "Gallery";
  siteName = this.siteData.siteName;
  appVersion = this.siteData.appVersion;
}
