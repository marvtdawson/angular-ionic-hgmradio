import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

@Injectable()
export class AuthProvider {

  constructor(public http: HttpModule) {
    console.log('HttpModule Connected');
  }

  /* currMemEmail = localStorage.getItem('regMemEmail'); */

 login(){
        return new Promise((resolve, reject) => {
        setTimeout(function () {
          resolve(false);
        }, 3000);

      });
  }
}
