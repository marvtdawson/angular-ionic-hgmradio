import { RegisterUserModel } from "../models/register-users-model";

export class RegNewUserService{

  private newUser: RegisterUserModel[] = [];

  /**
   * add user supplied data from registration form for data entry into
   * database using data / form model service.
   *
   * @param {string} regFName
   * @param {string} regLName
   * @param {string} regEmail_1
   * @param {string} regPw
   *
   *
   */
  addUser(regFName: string,
          regLName: string,
          regEmail_1: string,
          regPw: string){
    // call the model within the push function
    // to allow for the items in the array to be listed individually
    this.newUser.push(new RegisterUserModel(regFName, regLName, regEmail_1, regPw));
    console.log(this.newUser);
  }

  getUsers(){
    return this.newUser.slice();
  }

  setUsersStorageData():any{}

  removeUser(index: number){
    this.newUser.splice(index, 1);
  }
}
