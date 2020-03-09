import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SaloonService } from './../../services/saloon.service';

@Component({
  selector: 'app-usual',
  templateUrl: './usual.component.html',
  styleUrls: ['./usual.component.sass']
})
export class UsualComponent implements OnInit {
  @Output() defaultSelection = new EventEmitter();

  constructor(private service: SaloonService) { }

  ngOnInit(): void {
  }

  theUsual(usual: boolean) {
    this.defaultSelection.emit(usual);
  }

}
