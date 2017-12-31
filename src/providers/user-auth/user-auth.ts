import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';


/**
 *  The purpose of this service provider is to authenticate
 *  the current user.
 */

@Injectable()
export class UserAuthProvider {

  constructor(public http: Http,
              public storage: Storage,
              public loadingCtrl: LoadingController) {}

  //storedEmail = this.storage.get('');

  // define global user variables, these variables are used
  // with selected persistent data module/application for authentication.
  // Currently CouchDB is the default module being used to store persistent data.

  login() {
      return new Promise((resolve, reject) => {
        // set timeout function to 3 seconds
        setTimeout(function () {
          resolve(false);
        }, 3000);
      });
  }
}
