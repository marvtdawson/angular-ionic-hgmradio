import { Component } from '@angular/core';
import { ForgotPasswordPage } from '../../pages/forgot-password/forgot-password';
import { RegisterPage } from '../../pages/register/register';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})

export class LoginPage{
  constructor(){}
  pageTitle = 'Member Login';
  siteName = 'Who\'s Laundry';
  pushForgotPasswordPage = ForgotPasswordPage;
  pushRegisterPage = RegisterPage;

  onSubmit(login: NgForm){

  }
}


