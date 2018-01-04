import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Network} from "@ionic-native/network";

/*
  Generated class for the NetworkAuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NetworkAuthProvider {

  networkType: string;

  constructor(public http: Http,
              private network: Network) {

    console.log('Hello NetworkAuthProvider');

    this.networkType = this.network.type;

    /*console.log(this.networkType);*/
  }

  checkNetworkConnection() {

    if (this.networkType === 'unknown') {

      return console.log("Connection Unknown");
    }
    else if (this.networkType === 'cellular') {

      // add popup warning of possible additional service provider fees could apply

      return console.log("Cellular Connection Present...");

    } else {
      return console.log("Establishing Network Connection...");
    }
  }

}
