import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//$IMPORTSTATEMENT

/**
 * Generated class for the MembersProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//$IONICPAGE
@Component({
  selector: 'page-members-profile',
  templateUrl: 'members-profile.html',
})
export class MembersProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MembersProfilePage');
  }

}
