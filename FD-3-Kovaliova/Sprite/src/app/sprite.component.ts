import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sprite',
  templateUrl: 'sprite.component.html',
  styleUrls: ['sprite.component.css']
})
export class SpriteComponent {

  @Input("img")
  private img:string;

  @Input("offset_x")
  private offset_x:number;

  @Input("offset_y")
  private offset_y:number;

  @Input("width")
  private width:number;

  @Input("height")
  private height:number;

  @Output("clicked-EE")
  public clickedEE:EventEmitter<void>=new EventEmitter<void>();

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

  clicked():void {
    this.clickedEE.emit();
  };
}
