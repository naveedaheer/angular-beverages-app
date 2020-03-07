import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaloonService {

  constructor() { }

  saveInLocalStorage(data) {
    localStorage.setItem("user", JSON.stringify(data));
  }

  getFromLocalStorage() {
   return JSON.parse(localStorage.getItem("user"));
  }

}
