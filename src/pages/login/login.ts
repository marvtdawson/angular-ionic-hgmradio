import { Component } from '@angular/core';
import { ToastController, AlertController } from 'ionic-angular';
import { Subscription } from "rxjs/Subscription";
import { Network } from "@ionic-native/network";
import { NgForm } from "@angular/forms";

// Services and Providers
import { SiteDataProvider } from "../../providers/site-data/site-data";

// Pages
import { ForgotPasswordPage } from "../forgot-password/forgot-password";
import { RegisterPage } from "../register/register";


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
              public alertCtrl:  AlertController
              ){}

  pageTitle: string = 'Login';
  siteName = this.siteData.siteName;
  appVersion = this.siteData.appVersion;
  pushForgotPasswordPage = ForgotPasswordPage;
  pushRegisterPage = RegisterPage;

  displayNetworkUpdate(connectionState: string){ // pass the connection state of the application (online or offline)

    let networkType = this.network.type;

    this.toast.create({  // create a pop up toast with the connection state and network type
      message: `You are now ${connectionState} via ${networkType}`,
      duration: 3000
    }).present();
  }

  onSubmit(login: NgForm){}

  ionViewDidEnter(){
    this.connected = this.network.onConnect().subscribe(data => {
      console.log('What is this connected data status Marvin? ' + data.type);
      this.displayNetworkUpdate(data.type);
    },
        error => console.error(error));

    this.disconnected = this.network.onDisconnect().subscribe(data => {
      console.log('What is this disconnected data status Marvin? ' + data.type);
      this.displayNetworkUpdate(data.type);
      },
        error => console.error(error));

    this.showNetworkAlert();
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

  showNetworkAlert(){

  let alert = this.alertCtrl.create({
    title: 'Network Connection',
    subTitle: 'Your connection is Marvin!',
    buttons: ['OK']
  });
  alert.present();
}

}


