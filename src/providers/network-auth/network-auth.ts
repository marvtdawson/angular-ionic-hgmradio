import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Network } from "@ionic-native/network";
import { AlertController } from "ionic-angular";


@Injectable()
export class NetworkAuthProvider {

  alert: any;

  constructor(public http: Http,
              private networkType: Network,
              private alertCtrl: AlertController
             ) {}


  /**
   * The `type` property will return one of the following
   * connection types: `unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
   *
   */

  checkNetworkConnection() {

    const networkSubscriptionType = this.networkType.onConnect().subscribe(() => {

      setTimeout( () => {
        if(this.networkType.type === 'unknown') {

          return console.log("Connection Unknown");

        }
        else if (this.networkType.type === 'ethernet') {

          // add popup warning of possible additional service provider fees could apply

          const alert = this.alertCtrl.create({
            title: "Ethernet Connect Found",
            subTitle: <string> this.networkType.type,
            buttons: ["OK"]
          });
          alert.present();

          return console.log("Ethernet Connection Present...");

        }
        else if (this.networkType.type === 'wifi') {

          // add popup warning of possible additional service provider fees could apply

          const alert = this.alertCtrl.create({
            title: "WiFi Connect Found",
            subTitle: <string> this.networkType.type,
            buttons: ["OK"]
          });
          alert.present();

          return console.log("Wifi Connection Present...");

        }
        else if (this.networkType.type === '2g') {

          // add popup warning of possible additional service provider fees could apply

          const alert = this.alertCtrl.create({
            title: "2G Connection Found",
            subTitle: <string> this.networkType.type,
            buttons: ["OK"]
          });
          alert.present();

          return console.log("2g Connection Present...");

        }
        else if (this.networkType.type === '3g') {

          // add popup warning of possible additional service provider fees could apply
          const alert = this.alertCtrl.create({
            title: "3G Connection Found",
            subTitle: <string> this.networkType.type,
            buttons: ["OK"]
          });
          alert.present();

          return console.log("3g Connection Present...");

        }
        else if (this.networkType.type === '4g') {

          // add popup warning of possible additional service provider fees could apply
          const alert = this.alertCtrl.create({
            title: "4G Connection Found",
            subTitle: <string> this.networkType.type,
            buttons: ["OK"]
          });
          alert.present();

          return console.log("4g Connection Present...");

        }
        else if (this.networkType.type === 'cellular'){
          const alert = this.alertCtrl.create({
            title: "Cellular Connection Found",
            subTitle: <string> this.networkType.type,
            buttons: ["OK"]
          });
          alert.present();
          return console.log("None is the Connection type...");
        }
        else if (this.networkType.type === 'none') {

          // add popup warning of possible additional service provider fees could apply
          const alert = this.alertCtrl.create({
            title: "No Connection Found",
            subTitle: <string> this.networkType.type,
            buttons: ["OK"]
          });
          alert.present();

          return console.log("Cellular Connection Present...");

        }
        else {
          return console.log("Network Connection Type Equals None...");
        }
      }, 3000);

    });

    networkSubscriptionType.unsubscribe();

  }

  isNetworkStillConnected() {

    // watch network for a disconnect
    const disconnectSubscription = this.networkType.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
    });

    // stop disconnect watch
    disconnectSubscription.unsubscribe();
  }

}
