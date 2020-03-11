import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { UsualComponent } from './components/usual/usual.component';
import { ForgetComponent } from './components/forget/forget.component';
import { DialogueComponent } from './components/dialogue/dialogue.component';
import { BeverageComponent } from './components/beverage/beverage.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsualComponent,
    ForgetComponent,
    DialogueComponent,
    BeverageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
