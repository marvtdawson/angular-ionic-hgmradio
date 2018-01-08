import { LoginUsersModel } from "../models/login-users-model";
import {Injectable} from "@angular/core";


@Injectable()
export class LoginUserService{

  private loginUser: LoginUsersModel[] = [];

  constructor(public storage: Storage){}

  getCurrentUser(){

  }

}
