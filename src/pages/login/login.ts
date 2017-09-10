import { Component } from '@angular/core';
import { ForgotPasswordPage } from '../../pages/forgot-password/forgot-password';
import { RegisterPage } from '../../pages/register/register';
import { NgForm } from "@angular/forms";
import {SiteDataProvider} from "../../providers/site-data/site-data";

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})

export class LoginPage{
  constructor(public siteData: SiteDataProvider){}
  pageTitle: string = 'Login';
  siteName = this.siteData.siteName;
  appVersion = this.siteData.appVersion;
  pushForgotPasswordPage = ForgotPasswordPage;
  pushRegisterPage = RegisterPage;

  onSubmit(login: NgForm){}

}


