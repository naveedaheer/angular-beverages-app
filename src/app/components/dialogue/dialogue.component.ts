import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SaloonService } from './../../services/saloon.service';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.sass']
})
export class DialogueComponent implements OnInit, OnChanges {
  showModal = false;
  title = "Howdy, stranger. Haven't seen your face around here before. What's your name?";
  user = {
    firstName: '',
    lastName: '',
    selectedBeverage: ''
  }
  nameSubmitted = false;
  addBeverage = false;
  beverageList;
  @Input() openModal;
  newUser = true;

  constructor(private service: SaloonService) { }

  ngOnInit(): void {
    this.beverageList = this.service.getBeverages();
    this.showModal = true;
    const user = this.service.getUser();
    console.log("user", user);
    if (user) {
      this.title = `Hello again, Mr. ${user.lastName}! The usual?`
      this.newUser = false;
    }
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.openModal && changes.openModal.currentValue) {
      this.nameSubmitted = false;
      this.user.selectedBeverage = '';
      this.showModal = true;
      this.title = `Got it. Who are you again?`
    }
  }

  saveUser(): void {
    this.nameSubmitted = true;
    this.title = `Alright Mr. ${this.user.lastName}, what can I do for you?`;
  }

  getBeverage(value: string) {
    this.user.selectedBeverage = value;
    this.title = `One ${this.user.selectedBeverage}, coming right up!`;
  }

  getUpdatedBeverageList(list) {
    this.beverageList = list;
    console.log("e")
    this.addBeverage = false;
  }

}
