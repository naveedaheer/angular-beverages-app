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

  /**
   * It removes all the data from localStoarge using service method and sends an event to parent component 'dialogue'
   */
  clearAllData(): void {
    console.log("cicked")
    this.service.clearAllData();
    this.service.saveinitialBeverageList();
    this.clearData.emit();
  }

}
