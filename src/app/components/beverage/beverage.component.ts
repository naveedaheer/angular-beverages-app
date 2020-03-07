import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { SaloonService } from './../../services/saloon.service';

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.component.html',
  styleUrls: ['./beverage.component.sass']
})
export class BeverageComponent implements OnInit, OnChanges {
  @Input() userData;
  beverage: string;
  drinkList;
  @Output() updateBeverageList = new EventEmitter();

  constructor(private service: SaloonService) { }

  ngOnInit(): void {
    this.drinkList = this.service.getBeverages();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes", changes);
    if (changes && changes.userData && changes.userData.currentValue) {
      console.log("userData", this.userData);
      this.service.saveUser(this.userData);
    }
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
