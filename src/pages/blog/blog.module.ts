import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogPage } from './blog';
import { SiteDataProvider } from "../../providers/site-data/site-data"

@NgModule({
  declarations: [
    BlogPage,
  ],
  imports: [
    IonicPageModule.forChild(BlogPage),
  ],
  exports: [
    BlogPage
  ]
})
export class BlogPageModule {

  constructor(public siteData: SiteDataProvider){

  }

  siteName = this.siteData.siteName;
  appVersion = this.siteData.appVersion;
}
