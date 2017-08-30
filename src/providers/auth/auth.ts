import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { SQLite } from '@ionic-native/sqlite';

@Injectable()
export class AuthProvider {

  constructor(public http: HttpModule,
              public secureStorage: IonicStorageModule,
              public storage: Storage,
              private sqlite: SQLite ){

    storage.set('email', 'adog@hgmradio.com');

    storage.get('email').then((val)=> {
      console.log('This user email is: ', val);
    })

   /* this.sqlite.create({
      name: 'hgmRad10doTc0m.db',
      location: 'default'
    })*/
  }

  setData(){
    console.log('Set Data');
  }

  getData(){
    console.log('Get Data');
  }

  login(){
        return new Promise((resolve, reject) => {
        setTimeout(function () {
          resolve(false);
        }, 3000);
      });
  }
}
