import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Network} from "@ionic-native/network";
import {AlertController} from "ionic-angular";

/*
  Generated class for the NetworkAuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NetworkAuthProvider {



  constructor(public http: Http,
              private networkType: Network,
              public alertCtrl: AlertController) {}


  /**
   * The `type` property will return one of the following
   * connection types: `unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
   *
   */

  checkNetworkConnection() {

    const networkSubscriptionType = this.networkType.onConnect().subscribe(() => {

      setTimeout( () => {
        if(this.networkType.type === 'Unknown') {

          return console.log("Connection Unknown");

        }
        else if (this.networkType.type === 'ethernet') {

          // add popup warning of possible additional service provider fees could apply

          return console.log("Ethernet Connection Present...");

        }
        else if (this.networkType.type === 'wifi') {

          // add popup warning of possible additional service provider fees could apply

          return console.log("Wifi Connection Present...");

        }
        else if (this.networkType.type === '2g') {

          // add popup warning of possible additional service provider fees could apply

          return console.log("2g  Connection Present...");

        }
        else if (this.networkType.type === '3g') {

          // add popup warning of possible additional service provider fees could apply

          return console.log("3g Connection Present...");

        }
        else if (this.networkType.type === '4g') {

          // add popup warning of possible additional service provider fees could apply

          return console.log("4g Connection Present...");

        }
        else if (this.networkType.type === 'cellular') {

          // add popup warning of possible additional service provider fees could apply

          return console.log("Cellular Connection Present...");

        }
        else {
          return console.log("Network Connection Type Equals None...");
        }
      }, 3000);

    });

    networkSubscriptionType.unsubscribe();

  }

}
