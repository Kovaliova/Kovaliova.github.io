import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Tickets} from './tickets.service'
import { HallComponent } from './hall.component';
import {CashComponent} from './cash.component'

@NgModule({
  declarations: [
    HallComponent, CashComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Tickets],
  bootstrap: [HallComponent]
})
export class AppModule { }
