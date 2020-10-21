import { Component } from '@angular/core';

@Component({
  selector: 'app-popup-form-main',
  templateUrl: './popupFormMain.component.html',
  styleUrls: ['./popupFormMain.component.css'],
})
export class popupFormMain {
  isOpen: boolean = true;

  handlerPopupClose() {
    console.log(this.isOpen);
    this.isOpen = true;
    console.log(this.isOpen);
  }
}
