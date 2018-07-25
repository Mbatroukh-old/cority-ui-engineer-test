import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, ExpandComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import {
  DatePipeComponent
} from "./list-item/list-item.component";

@NgModule({
  declarations: [
    AppComponent,
    ExpandComponent,
    ListItemComponent,
    DatePipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
