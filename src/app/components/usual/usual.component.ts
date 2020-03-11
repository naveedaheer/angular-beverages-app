import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-usual',
  templateUrl: './usual.component.html',
  styleUrls: ['./usual.component.sass']
})
export class UsualComponent implements OnInit {
  @Output() defaultSelection = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * @param usual true or false, if user click on button the usual then it is true if clicks on 'another beverage' then fasle
   * It sends an event to parent component 'dialogue'
   */
  theUsual(usual: boolean) {
    this.defaultSelection.emit(usual);
  }

}
