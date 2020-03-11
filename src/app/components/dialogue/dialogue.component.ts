import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SaloonService } from './../../services/saloon.service';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit, OnChanges {
  title = "Howdy, stranger. Haven't seen your face around here before. What's your name?";
  user = {
    firstName: '',
    lastName: ''
  }
  selectedBeverage: string;
  nameSubmitted = false; // checks if user already entered first and last name
  addBeverage = false; // used to display/hide the beverage menu. It hide the menu when a new drink is being added
  beverageList; // list of all drinks saved in localStorage
  @Input() forgetCliked;
  newUser = true; // checks the user is new or returning
  showMenu = false; // used to show/hide the beverage menu
  constructor(private service: SaloonService) {

  }

  /**
   * get the beverage list and user data from the service methods and displays a message accordingly
   */
  ngOnInit(): void {
    this.beverageList = this.service.getBeverages();
    const user = this.service.getUser();
    if (user) {
      this.user = user;
      this.title = `Hello again, Mr. ${user.lastName}! The usual?`
      this.newUser = false;
    }
  }


  /**
   * Reset if user clicks 'I was never here'
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.forgetCliked && !changes.forgetCliked.firstChange) {
      this.nameSubmitted = false;
      this.selectedBeverage = '';
      this.newUser = true;
      this.user = {
        firstName: '',
        lastName: ''
      }
      this.getUpdatedBeverageList(this.service.getBeverages());
      this.title = `Got it. Who are you again?`
    }
  }

  /**
   * It saves a user name using service method
   */
  saveUser(): void {
    this.service.saveUser(this.user);
    this.nameSubmitted = true;
    this.title = `Alright Mr. ${this.user.lastName}, what can I do for you?`;
    this.showMenu = true;
  }

  /**
 * when user selects a drink from the menu then it saves using service method and displays a message
 */
  getBeverage(value: string) {
    this.selectedBeverage = value;
    this.title = `One ${this.selectedBeverage}, coming right up!`;
    this.service.saveUserBeverage(this.selectedBeverage);

  }

  /**
   * @param list contains all the beverage stored in localStorage
   * this is output of child component 'beverage', it runs when a drink is added in localStorage
   */
  getUpdatedBeverageList(list) {
    this.beverageList = list;
    this.addBeverage = false;
    this.showMenu = true;
  }

  /**
 * @param usual contains true or false. It true then show message One <chosen beverage>, coming right up! if false then show a beverage menu
 * this is output of child component 'usual', it runs when user clicks on any of two buttons 1) the usual 2) another beverage
 */
  drinkSelection(usual: boolean) {
    if (usual) {
      this.showMenu = false;
      this.selectedBeverage = '';
      this.title = `One ${this.service.getUserBeverage()}, coming right up!`;
    } else {
      this.selectedBeverage = '';
      this.showMenu = true;
      this.addBeverage = false;
      this.nameSubmitted = true;
    }
  }

}
