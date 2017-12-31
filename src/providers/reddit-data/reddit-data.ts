import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class RedditDataProvider {

  constructor(public http: Http) {}

  getRemoteData(){
    this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=10&sort=hot')
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
      })
  }

  getLocalData(){
    this.http.get('assets/data/redditData.json')
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
      })
  }

}
