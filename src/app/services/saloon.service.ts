import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaloonService {
  constructor() { }

  saveUser(data) {
    localStorage.setItem("user", JSON.stringify(data));
  }

  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  saveBeverages(data) {
    localStorage.removeItem("beverages");
    localStorage.setItem("beverages", JSON.stringify(data));
  }

  getBeverages() {
    return JSON.parse(localStorage.getItem("beverages")) || [];
  }

  saveUserBeverage(data) {
    // localStorage.removeItem("selectedBeverage");
    localStorage.setItem("selectedBeverage", data);
  }

  
  getUserBeverage() {
    return localStorage.getItem("selectedBeverage");
  }

  clearAllData() {
    localStorage.removeItem("user");
    localStorage.removeItem("selectedBeverage");
  }

}
