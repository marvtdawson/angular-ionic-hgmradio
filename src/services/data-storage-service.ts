import {HttpClient} from "@angular/common/http";
//import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {RegNewUserService} from "./register-user-service";

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient,
              private regUserService: RegNewUserService){}

  storeNewUser(){
      this.http.put('https://hgmradio-86b55.firebaseio.com/newuser.json', this.regUserService);
  }
}
