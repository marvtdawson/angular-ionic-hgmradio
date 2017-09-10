import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage, IonicStorageModule } from '@ionic/storage';


/**
 *  The purpose of this service provider is to authenticate
 *  the current user.
 */

@Injectable()
export class UserAuthProvider {

  constructor(public http: Http,
              public storage: Storage) {
    console.log('Hello UserAuthProvider Provider');

    storage.set('email', 'adog@hgmradio.com');

    storage.get('email').then((val)=> {
      console.log('This user email is: ', val);
    })
  }

  // define global user variables, these variables are used
  // with selected persistent data module/application for authentication.
  // Currently CouchDB is the default module being used to store persistent data.

  /*let _id: any;
  let uName: string;
  let uEmail: string;
  let specPw: any;*/




}
