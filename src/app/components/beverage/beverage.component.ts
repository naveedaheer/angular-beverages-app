import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { SaloonService } from './../../services/saloon.service';

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.component.html',
  styleUrls: ['./beverage.component.sass']
})
export class BeverageComponent implements OnInit, OnChanges {
  @Input() userBeverage;
  beverage: string;
  drinkList;
  @Output() updateBeverageList = new EventEmitter();

  constructor(private service: SaloonService) { }

  ngOnInit(): void {
    this.drinkList = this.service.getBeverages();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes", changes);
    if (this.userBeverage) {
      this.service.saveUserBeverage(this.userBeverage);
    }
    // if (changes && changes.userBeverage && changes.userBeverage.currentValue) {
    // }
  }

  add(): void {
    console.log("this.beverage", this.beverage);

    this.drinkList.push(this.beverage);
    console.log("this.drinkList", this.drinkList);
    // if()
    this.service.saveBeverages(this.drinkList);
    this.updateBeverageList.emit(this.drinkList);

  }

}
