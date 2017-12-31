import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MembersSettingsPage } from './members-settings';

@NgModule({
  declarations: [
    MembersSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(MembersSettingsPage),
  ],
})
export class MembersSettingsPageModule {}
