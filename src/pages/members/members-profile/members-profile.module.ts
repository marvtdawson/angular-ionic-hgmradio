import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MembersProfilePage } from './members-profile';

@NgModule({
  declarations: [
    MembersProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(MembersProfilePage),
  ],
})
export class MembersProfilePageModule {}
