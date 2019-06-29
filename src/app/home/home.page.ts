import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public  disable = true;
  public toggle2 = false;

  constructor() {}


  call(event) {
    if (event.checked === true) {
      this.disable = false;
    } else {
      this.toggle2 = false;
      this.disable = true;
    }
  }
}
