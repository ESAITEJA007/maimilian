import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todays_date = new Date().toLocaleDateString();
  header = 'Maximilian Course - March 05 2023';
  heading = "";
  isDisabled = true;
  constructor(){
    setTimeout(() => { this.isDisabled = false;},5000);
  }
  diffInMs = new Date().getTime() - new Date('2023-03-05').getTime();
  duration = Math.floor(this.diffInMs / (1000 * 60 * 60 * 24));

  changeHeader(){
    // console.log(event);
    this.header = this.heading;

  }
}
