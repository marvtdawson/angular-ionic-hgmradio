import { RegisterUser } from "../models/users";

export class RegNewUser{

  private newUser: RegisterUser[] = [];

  addUser(regFName: string,
          regLName: string,
          regEmail_1: string,
          regEmail_2: string,
          regPw: string){
    this.newUser.push(new RegisterUser(regFName, regLName, regEmail_1, regEmail_2, regPw));
    console.log(this.newUser);
  }

  getUsers(){
    return this.newUser.slice();
  }

  removeUser(index: number){
    this.newUser.splice(index, 1);
  }
}
