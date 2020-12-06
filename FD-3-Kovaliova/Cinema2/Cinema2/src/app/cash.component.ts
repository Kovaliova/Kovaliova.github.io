import { Component} from '@angular/core';
import {Tickets} from './tickets.service'

@Component({
  
  selector: 'cash',
  templateUrl: './cash.component.html',
  
})
export class CashComponent {

  private tickets:Tickets;
  public numberTicket:Array<number>
  public numPlace:Array<number>=[]
  constructor (_tickets:Tickets) {
    this.tickets=_tickets
  }

order(n:number):void {
  this.tickets.orderSit(n)
  this.numPlace=this.tickets.numPlace
}

}