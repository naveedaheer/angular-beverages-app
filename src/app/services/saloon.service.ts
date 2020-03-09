import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaloonService {
  constructor() { }

  /**
   * @param data contains first name and last name
   * @description it saves user data in localStorage
   */
  saveUser(data) {
    localStorage.setItem("user", JSON.stringify(data));
  }

  /**
   * @description it retrives the user data from localStorage
   */
  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  /**
   * @param data contains the list of drinks
   * @description it saves beverage list in localStorage
   */
  saveBeverages(data) {
    localStorage.removeItem("beverages");
    localStorage.setItem("beverages", JSON.stringify(data));
  }

  /**
   * @description it retrives the beverage list from localStorage
   */
  getBeverages() {
    return JSON.parse(localStorage.getItem("beverages")) || [];
  }

  /**
   * @param data contains selected beverage
   * @description it saves user selected beverage in localStorage
   */
  saveUserBeverage(data) {
    localStorage.setItem("selectedBeverage", data);
  }

  /**
   * @description it retrives the user's most recent beverage from localStorage
   */
  getUserBeverage() {
    return localStorage.getItem("selectedBeverage");
  }

  /**
   * @description it removes all the data in localStorage
   */
  clearAllData() {
    localStorage.clear();
  }

}
