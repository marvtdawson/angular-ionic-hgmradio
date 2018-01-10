import firebase from 'firebase';

/**
 * This program is for user authentication via
 * Google Firebase backend
 */

export class AuthenticateService {

  registerNewUser(email: string, passWord: string){

    return firebase.auth().createUserWithEmailAndPassword(email, passWord);
  }

  signInUser(email: string, passWord: string){
    return firebase.auth().signInWithEmailAndPassword(email, passWord);
  }

  signOut(){
    firebase.auth().signOut();
  }

}
