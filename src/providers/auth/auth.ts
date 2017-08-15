import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthProvider {

  constructor(public http: HttpModule,
              public secureStorage: IonicStorageModule,
              public storage: Storage){
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
