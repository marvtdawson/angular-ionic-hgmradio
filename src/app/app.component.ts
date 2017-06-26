import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';


import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { AboutPage } from "../pages/about/about";
import { ContactUsPage } from "../pages/contact-us/contact-us";
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { SplashHomePage } from "../pages/splash-home/splash-home";
import { AuthProvider } from "../providers/auth/auth";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SplashHomePage; // by default any is = HomePage; - using LoginPage for Authenticating p
  loader: any;
  siteName = 'HGM Radio';
  appVersion = 'v1.2';
  pushHomePage = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public modalCtrl: ModalController,
              public auth: AuthProvider,
              public loadingCtrl: LoadingController,) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Home', component: HomePage},
      {title: 'About', component: AboutPage},
      //{ title: 'List', component: ListPage },
      {title: 'Contact Us', component: ContactUsPage},
      {title: 'Sign Up', component: RegisterPage},
      {title: 'Member Login', component: LoginPage},
    ];

    this.presentLoading();

    this.auth.login().then((isLoggedIn) => {

      if (isLoggedIn === true) {
        this.rootPage = SplashHomePage;
      } else {
        this.rootPage = LoginPage;
      }
      this.loader.dismiss();
    });

  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Authenticating..."
    });
    this.loader.present();
  }

  notARegisterMember() {
    this.loader = this.loadingCtrl.create({
      content: "Please Register"
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
