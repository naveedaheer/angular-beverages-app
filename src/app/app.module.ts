import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DialogueComponent } from './components/dialogue/dialogue.component';
import { ForgetComponent } from './components/forget/forget.component';
import { BeverageComponent } from './components/beverage/beverage.component';
import { UsualComponent } from './components/usual/usual.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DialogueComponent,
    ForgetComponent,
    BeverageComponent,
    UsualComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
