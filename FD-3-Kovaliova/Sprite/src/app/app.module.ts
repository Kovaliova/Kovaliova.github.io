import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SpriteHostComponent } from './spriteHost.component';
import {SpriteComponent} from "./sprite.component";

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ SpriteHostComponent, SpriteComponent],
  providers: [],
  bootstrap: [SpriteHostComponent]
})
export class AppModule { }
