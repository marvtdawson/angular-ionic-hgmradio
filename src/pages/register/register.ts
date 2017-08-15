import { Component } from '@angular/core';
import { LoginPage } from '../login/login';

@Component({
  selector: 'register',
  templateUrl: 'register.html'
})

export class RegisterPage{
  constructor(){}
  pageTitle = 'Sign Up';
  siteName = 'HGM Radio';
  pushLoginPage = LoginPage;
}
