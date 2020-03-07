import { Component, OnInit } from '@angular/core';
import { SaloonService } from './../../services/saloon.service';

@Component({
  selector: 'app-usual',
  templateUrl: './usual.component.html',
  styleUrls: ['./usual.component.sass']
})
export class UsualComponent implements OnInit {
  defaultSelection;
  constructor(private service: SaloonService) { }

  ngOnInit(): void {
    this.defaultSelection = this.service.getUserBeverage();
  }

}
