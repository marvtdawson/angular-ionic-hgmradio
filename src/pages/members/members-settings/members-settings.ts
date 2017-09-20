import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";

//$IMPORTSTATEMENT

/**
 * Generated class for the MembersSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//$IONICPAGE
@Component({
  selector: 'page-members-settings',
  templateUrl: 'members-settings.html',
})
export class MembersSettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MembersSettingsPage');
  }

}
