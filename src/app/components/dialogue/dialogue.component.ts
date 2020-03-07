import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.sass']
})
export class DialogueComponent implements OnInit {
public showModal = false;
  constructor() { }

  ngOnInit(): void {
  }

}
