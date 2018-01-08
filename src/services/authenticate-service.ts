import firebase from 'firebase';

/**
 * This program is for user authentification via
 * Google Firebase
 */

export class AuthenticateService {

  registerNewUser(email: string, passWord: string){

    return firebase.auth().createUserWithEmailAndPassword(email, passWord);
  }

}
