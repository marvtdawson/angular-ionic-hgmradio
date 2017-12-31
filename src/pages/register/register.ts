import { Component } from '@angular/core';
import { LoginPage } from '../login/login';
import { SiteDataProvider } from "../../providers/site-data/site-data";
import { Storage } from "@ionic/storage";
import { NgForm } from "@angular/forms";
import { RegNewUser} from "../../services/register-user";

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
              private regUserService: RegNewUser){}

  regNewMember(form: NgForm){
    this.regUserService.addUser(form.value.regFName,
                                form.value.regLName,
                                form.value.regEmail_1,
                                form.value.regEmail_2,
                                form.value.regPw);
    form.reset();
  }

}
