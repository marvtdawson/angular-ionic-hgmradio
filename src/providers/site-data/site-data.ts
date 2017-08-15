import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/**
 * This program serve as the source for the site name,
 * app version and any other static data throughout the application.
 *
 */
@Injectable()
export class SiteDataProvider {

  siteName: string  = 'HGM Radio';
  appVersion: string  = 'v1.2';

  constructor(public http: Http) {
   /* console.log('Hello SiteDataProvider Provider');*/
  }

}
