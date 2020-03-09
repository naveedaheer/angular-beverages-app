import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SaloonService } from './../../services/saloon.service';

@Component({
  selector: 'app-usual',
  templateUrl: './usual.component.html',
  styleUrls: ['./usual.component.sass']
})
export class UsualComponent implements OnInit {
  userBeverage;
  showDefaultSelection = false;
  @Output() defaultSelection = new EventEmitter();

  constructor(private service: SaloonService) { }

  ngOnInit(): void {
    this.userBeverage = this.service.getUserBeverage();
  }

  theUsual(usual: boolean) {
    this.defaultSelection.emit(usual);
  }

}
