import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SaloonService } from './../../services/saloon.service';

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.component.html',
  styleUrls: ['./beverage.component.css']
})
export class BeverageComponent implements OnInit {
  beverage: string; // beverage name user eners in input field to store
  drinkList; // display all the beverages stored
  @Output() updateBeverageList = new EventEmitter(); // this sends the updated list of beverages
  isRename = false; // checks the value is for add or rename
  currentIndex; // used to rename the drink

  constructor(private service: SaloonService) { }

  /**
   * get all the drinks from localStoarge using service
   */
  ngOnInit(): void {
    this.drinkList = this.service.getBeverages();
  }

  /**
   *  Add a new drink in the list of all beverages in localStorge
   */
  add(): void {
    this.drinkList.push(this.beverage);
    this.service.saveBeverages(this.drinkList);
    this.updateBeverageList.emit(this.drinkList);
  }

  /**
 *  Rename a new drink in the list of all beverages in localStorge
 */
  rename(): void {
    this.drinkList[this.currentIndex] = this.beverage;
    this.service.saveBeverages(this.drinkList);
    this.updateBeverageList.emit(this.drinkList);
  }

}
