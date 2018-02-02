import { Component, Input } from '@angular/core';


@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {

  text: string;

  @Input('progress') progress;

  constructor() {
    console.log('Hello ProgressBarComponent Component');
    this.text = 'Hello World';
  }

}
