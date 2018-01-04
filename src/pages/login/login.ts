import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { Subscription } from "rxjs/Subscription";
import { ForgotPasswordPage } from '../../pages/forgot-password/forgot-password';
import { RegisterPage } from '../../pages/register/register';
import { NgForm } from "@angular/forms";
import { SiteDataProvider } from "../../providers/site-data/site-data";
import { Network } from "@ionic-native/network";


@Component({
  selector: 'login',
  templateUrl: 'login.html'
})

export class LoginPage{

  connected: Subscription;
  disconnected: Subscription;

  constructor(public siteData: SiteDataProvider,
  private network: Network,
  private toast: ToastController,
              ){}

  pageTitle: string = 'Login';
  siteName = this.siteData.siteName;
  appVersion = this.siteData.appVersion;
  pushForgotPasswordPage = ForgotPasswordPage;
  pushRegisterPage = RegisterPage;

  displayNetworkUpdate(connectionState: string){

    let networkType = this.network.type;

    this.toast.create({
      message: `You are now ${connectionState} via ${networkType}`,
      duration: 3000
    }).present();
  }

  onSubmit(login: NgForm){}

  ionViewDidEnter(){
    this.connected = this.network.onConnect().subscribe(data => {
      console.log(data);
      this.displayNetworkUpdate(data.type);
    },
        error => console.error(error));

    this.disconnected = this.network.onDisconnect().subscribe(data => {
      console.log(data);
      this.displayNetworkUpdate(data.type);
      },
        error => console.error(error));
  }

  ionViewWillLeave(){
    this.connected.unsubscribe();
    this.disconnected.unsubscribe();
  }

  ionViewDidLoad(){

    /* let galleryFile = new XMLHttpRequest();

      galleryFile.open('src/pages/gallery/gallery.html', function nodeStyleCallBack(err: string, data: string): string {
       if (err) {
         console.error('There was an error', err);
         return ;
       }
       console.log("This is your data: " + data);
     }); */


  }

}


