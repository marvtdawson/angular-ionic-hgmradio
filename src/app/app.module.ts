import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { HttpModule} from "@angular/http";
import { FormsModule } from "@angular/forms";

import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SecureStorage } from "@ionic-native/secure-storage";
import { Media } from "@ionic-native/media";
import { Network } from "@ionic-native/network";
import { SQLite } from "@ionic-native/sqlite";
import { UniqueDeviceID } from "@ionic-native/unique-device-id";
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MusicControls } from "@ionic-native/music-controls";

// providers
import { SiteDataProvider } from "../providers/site-data/site-data";
import { UserAuthProvider } from '../providers/user-auth/user-auth';
import { NetworkAuthProvider } from '../providers/network-auth/network-auth';
import { OauthProvider } from '../providers/oauth/oauth';

// services
import { RegNewUserService } from "../services/register-user-service";
import { LoginUserService } from "../services/login-user-service";
import { AuthenticateService } from "../services/authenticate-service";
import { DataStorageService} from "../services/data-storage-service";

// pages
import { HGMRadApp } from './app.component';
import { ProgressBarComponent } from "../components/progress-bar/progress-bar";
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
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
import { ArtistProfilePage } from "../pages/artist-profile/artist-profile";
import { TabsPage } from "../pages/tabs/tabs";
import { AngularFireModule} from "angularfire2";
import { AngularFireAuthModule} from "angularfire2/auth";
import { AngularFireDatabase} from "angularfire2/database-deprecated";
import { AngularFireDatabaseModule} from "angularfire2/database";
import { FIREBASE_CONFIG} from "./app.firebase.config";


@NgModule({
  declarations: [
    HGMRadApp,
    TabsPage,
    HomePage,
    ListPage,
    AboutPage,
    AdminLoginPage,
    ArtistProfilePage,
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
    IonicModule.forRoot(HGMRadApp),
    HttpModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HGMRadApp,
    TabsPage,
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
    RadioPage,
    ArtistProfilePage
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
    RegNewUserService,
    LoginUserService,
    AuthenticateService,
    DataStorageService,
    UniqueDeviceID,
    MusicControls,
    AngularFireDatabase
  ]
})
export class AppModule {}
