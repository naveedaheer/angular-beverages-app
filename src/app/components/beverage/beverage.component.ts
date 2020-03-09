import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { SaloonService } from './../../services/saloon.service';

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.component.html',
  styleUrls: ['./beverage.component.sass']
})
export class BeverageComponent implements OnInit {
  beverage: string;
  drinkList;
  @Output() updateBeverageList = new EventEmitter();

  constructor(private service: SaloonService) { }

  ngOnInit(): void {
    this.drinkList = this.service.getBeverages();
  }

  add(): void {

    this.drinkList.push(this.beverage);
    this.service.saveBeverages(this.drinkList);
    this.updateBeverageList.emit(this.drinkList);

  }

}
