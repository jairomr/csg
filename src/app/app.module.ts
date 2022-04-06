import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/csg/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
