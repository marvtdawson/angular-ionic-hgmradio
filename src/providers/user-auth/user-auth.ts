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
              public loadingCtrl: LoadingController,) {

    console.log('Hello UserAuthProvider Provider');

    storage.set('email', 'adog@hgmradio.com');

    storage.get('email').then((val)=> {
      console.log('This user email is: ', val);
    })
  }

  // define global user variables, these variables are used
  // with selected persistent data module/application for authentication.
  // Currently CouchDB is the default module being used to store persistent data.

  userInfo() {

    let _id: any;
    let uName: string;
    let uEmail: string;
    let specPw: any;



  }




}
