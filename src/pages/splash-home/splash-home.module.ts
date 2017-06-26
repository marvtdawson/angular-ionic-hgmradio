import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SplashHomePage } from './splash-home';

@NgModule({
  declarations: [
    SplashHomePage,
  ],
  imports: [
    IonicPageModule.forChild(SplashHomePage),
  ],
  exports: [
    SplashHomePage
  ]
})
export class SplashHomePageModule {}
