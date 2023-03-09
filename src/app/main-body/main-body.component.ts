import { Component } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css'],
})
export class MainBodyComponent {
  isDisplay: boolean = false;
  animals = ['Cat', 'Dog', 'Pig', 'Goat', 'Hen'];

  toDisplay() {
    this.isDisplay = !this.isDisplay;
  }
}
