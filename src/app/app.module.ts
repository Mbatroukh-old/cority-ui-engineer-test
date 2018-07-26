import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import {
  DatePipeComponent
} from "./list-item/list-item.component";

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    DatePipeComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
