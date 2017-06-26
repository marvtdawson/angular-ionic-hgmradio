import { Component } from '@angular/core';
import { ContactUsPage} from '../../pages/contact-us/contact-us';

@Component({
  selector: 'about',
  templateUrl: 'about.html'
})

export class AboutPage {
  constructor() {}
  pageTitle = 'About';
  contactus = './contact-us.html';
  pushContactPage = ContactUsPage;
  siteName = 'Who\'s Laundry';
}
