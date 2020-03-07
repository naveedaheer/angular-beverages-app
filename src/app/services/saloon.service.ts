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

  clearAllData() {
    localStorage.clear();
  }

}
