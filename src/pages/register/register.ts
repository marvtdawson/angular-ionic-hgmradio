import { Component } from '@angular/core';
import { LoginPage } from '../login/login';
import { Storage } from "@ionic/storage";
import { NgForm } from "@angular/forms";

// Services and Providers
import { SiteDataProvider } from "../../providers/site-data/site-data";
import { RegNewUserService } from "../../services/register-user-service";
import { RegisterUserModel } from "../../models/register-users-model";
import { AuthenticateService } from "../../services/authenticate-service";
import { AlertController, LoadingController} from "ionic-angular";

@Component({
  selector: 'register',
  templateUrl: 'register.html'
})

export class RegisterPage{

  // static site data
  siteName = this.siteData.siteName;
  appVersion = this.siteData.appVersion;
  pageTitle = 'Register';
  pushLoginPage = LoginPage;


  constructor(public siteData: SiteDataProvider,
              public storage: Storage,
              private regUserService: RegNewUserService,
              private authService: AuthenticateService,
              private loadingCtrl: LoadingController,
              private alterCtrl: AlertController){}

  listRegUsers: RegisterUserModel[];

  ionViewWillEnter(){
    this.loadUsers();
  }

  /**
   * Provide the application with Authentication
   * via Google Firebase and registration to a
   * NoSQL Schema
   *
   * @param {NgForm} form
   */
  onRegNewMember(form: NgForm){
    const loading = this.loadingCtrl.create({
      content: "Registering New User..."
    });
    loading.present();
    // send new user email and password to Firebase
    this.authService.registerNewUser(form.value.regEmail_1,
                                      form.value.regPw)
      .then(data => {
        loading.dismiss();
      })
      .catch(error => {
       loading.dismiss();
       const alert = this.alterCtrl.create({
         title: 'Registration Failed!',
         message: error.message,
         buttons: ['Ok']
       });
       alert.present();
      });

    // send new user information to NoSQL schema, if applicable
    this.regUserService.addUser(form.value.regFName,
                                form.value.regLName,
                                form.value.regEmail_1,
                                form.value.regEmail_2,
                                form.value.regPw,
                                form.value.regTaC);
    form.reset();
    this.loadUsers(); // get the latest or newest information from list
  }

  /**
   * This function removes a user from display ion-list
   * @param {number} index
   */
  onRemoveUser(index: number){
    this.regUserService.removeUser(index);
    this.loadUsers();
  }

  /**
   * For testing and debugging purpose only.
   * Please
   * retrieve list items of user entered form information
   */
  private loadUsers(){
    this.listRegUsers = this.regUserService.getUsers();
  }

}
