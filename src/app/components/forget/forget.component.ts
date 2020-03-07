import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SaloonService } from './../../services/saloon.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.sass']
})
export class ForgetComponent implements OnInit {
  @Output() clearData = new EventEmitter();

  constructor(private service: SaloonService) { }

  ngOnInit(): void {
  }

  clearAllData(): void {
    this.service.clearAllData();
    this.clearData.emit(true);
  }

}
