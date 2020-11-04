import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'spriteHost',
  templateUrl: 'spriteHost.component.html',
  styleUrls: ['spriteHost.component.css']
})
export class SpriteHostComponent {

  private img:string = "http://fe.it-academy.by/Examples/cards2.png";
  private offset_x:number=0;
  private offset_y:number=0;
  private width:number=144;
  private height:number=194;

  getUrl():string {
    return this.img;
  };

  getOffset_x():number {
    return this.offset_x;
  };

  getOffset_y():number {
    return this.offset_y;
  };

  getWidth():number {
    return this.width;
  };

  getHeight():number {
    return this.height;
  };

  changeCard():void {
    this.offset_x += this.width;
    this.offset_y -= this.height;
  };

}
