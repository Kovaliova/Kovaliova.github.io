import { Component} from '@angular/core';
import {Tickets} from './tickets.service'

@Component({
  selector: 'app-root',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
  
})
export class HallComponent {
  private tickets:Tickets;
  private place:Array<boolean>;
  
  constructor (_tickets:Tickets) {
    this.tickets=_tickets;
    _tickets.getSubject().subscribe( res=>{ this.place=res } )
  }

  getAllSit():number {
   return this.tickets.getAllSit().length
  }

  getFreeSit():number {
   return  this.tickets.getFreeSit().length
  }

  getBusySit():number {
   return this.tickets.getBusySit().length
  }

  getPlacesObservable():Array<boolean> {
     return this.place
  }
  
}
