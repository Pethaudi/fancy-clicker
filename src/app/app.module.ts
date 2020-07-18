import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FancyClickCounterComponent } from './fancy-click-counter/fancy-click-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    FancyClickCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
