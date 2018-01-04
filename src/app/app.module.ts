import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from "@angular/http";
import { IonicStorageModule } from '@ionic/storage';
import { SecureStorage } from "@ionic-native/secure-storage";
import { Media } from "@ionic-native/media";
import { ProgressBarComponent } from "../components/progress-bar/progress-bar";
import { Network } from "@ionic-native/network";
import { FormsModule } from "@angular/forms";
import { SQLite } from "@ionic-native/sqlite";

// providers
import { SiteDataProvider } from "../providers/site-data/site-data";
import { UserAuthProvider } from '../providers/user-auth/user-auth';
import { NetworkAuthProvider } from '../providers/network-auth/network-auth';
import { OauthProvider } from '../providers/oauth/oauth';

// services
import { RegNewUser} from "../services/register-user";

// pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AboutPage } from "../pages/about/about";
import { AdminLoginPage } from "../pages/admin-login/admin-login";
import { ContactUsPage } from "../pages/contact-us/contact-us";
import { ForgotPasswordPage } from "../pages/forgot-password/forgot-password";
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { SubscribePage } from "../pages/subscribe/subscribe";
import { GalleryPage } from "../pages/gallery/gallery";
import { PrivatePolicyPage } from "../pages/private-policy/private-policy";
import { ProductsPage } from "../pages/products/products";
import { ServicesPage } from "../pages/services/services";
import { TermsAndConditionsPage } from "../pages/terms-and-conditions/terms-and-conditions";
import { BlogPage } from "../pages/blog/blog";
import { SplashHomePage } from "../pages/splash-home/splash-home";
import { RadioPage } from "../pages/radio/radio";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    AdminLoginPage,
    ContactUsPage,
    ForgotPasswordPage,
    LoginPage,
    RegisterPage,
    SubscribePage,
    GalleryPage,
    PrivatePolicyPage,
    ProductsPage,
    ServicesPage,
    TermsAndConditionsPage,
    BlogPage,
    SplashHomePage,
    RadioPage,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AdminLoginPage,
    ContactUsPage,
    ForgotPasswordPage,
    LoginPage,
    RegisterPage,
    AboutPage,
    SubscribePage,
    GalleryPage,
    PrivatePolicyPage,
    ProductsPage,
    ServicesPage,
    TermsAndConditionsPage,
    BlogPage,
    SplashHomePage,
    RadioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OauthProvider,
    SiteDataProvider,
    Media,
    SecureStorage,
    Network,
    UserAuthProvider,
    SQLite,
    NetworkAuthProvider,
    OauthProvider,
    RegNewUser,
  ]
})
export class AppModule {}
