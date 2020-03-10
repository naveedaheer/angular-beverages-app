import { Component, OnInit } from '@angular/core';
import { SaloonService } from './services/saloon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'angular-saloon';
  dataRemoved = false;
  initialBeveragesList = ["Coffee", "Milk", "Water", "Tea"];
  constructor(private service: SaloonService) {

  }

  /**
 * store default beverage list
 */
  ngOnInit(): void {
    if (!(this.service.getBeverages().length)) {
      this.service.saveBeverages(this.initialBeveragesList);
    }
  }

  /**
   * @param event true if all the data has been removed
   * It sends event as an input to dialogue component to reset the state when user clicks 'I was never here'
   */
  allDataRemoved(event) {
    this.dataRemoved = event;
  }

}
