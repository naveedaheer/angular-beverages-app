import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent{
  title = 'angular-saloon';
  dataRemoved = false;

  /**
   * It sends event as an input to dialogue component to reset the state when user clicks 'I was never here'
   */
  allDataRemoved() {
    this.dataRemoved = !this.dataRemoved;
  }

}
