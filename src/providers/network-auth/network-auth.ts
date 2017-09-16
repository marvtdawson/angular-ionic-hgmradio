import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the NetworkAuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NetworkAuthProvider {

  constructor(public http: Http) {
    console.log('Hello NetworkAuthProvider Provider');
  }

  networkConnection(){
    return console.log("Establishing Network Connection...");
  }

}
