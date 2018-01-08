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

  networkType: string;

  constructor(public http: Http,
              private network: Network,
              public alertCtrl: AlertController) {

    console.log('Hello NetworkAuthProvider');

    console.log("This network connection is a " + this.networkType + " connection!");
  }




  checkNetworkConnection() {

    // check connection types


    if (this.networkType === 'unknown') {

      return console.log("Connection Unknown");
    }
    else if (this.networkType === 'cellular') {

      // add popup warning of possible additional service provider fees could apply

      return console.log("Cellular Connection Present...");

    }
    else if (this.networkType === 'wifi') {

      // add popup warning of possible additional service provider fees could apply

      return console.log("WiFi Connection Present...");

    }else {
      return console.log("Establishing Network Connection...");
    }
  }

}
