import {Injectable} from "@angular/core"
import { Observable } from 'rxjs';

@Injectable()
export class Tickets {
    private hall$:Observable<Array<boolean>>;
    private hall:Array<boolean>=[true,true,true,true,true,true,true,true,true,true];

    constructor() {
        this.hall$=new Observable<Array<boolean>>(obs=> obs.next(this.hall));
      }
    
      getSubject():Observable<Array<boolean>> {
        return this.hall$;
      }

    private places:Array<{place:number, status:string}> =[{place:1, status:'free'}, {place:2, status:'free'},{place:3, status:'free'}, {place:4, status:'free'}, {place:5, status:'free'}, {place:6, status:'free'}, {place:7, status:'free'}, {place:8, status:'free'}, {place:9, status:'free'}, {place:10, status:'free'}]
    public numPlace:Array<number>=[];

getAllSit():Array<{place:number, status:string}> {
  return this.places
}

getFreeSit():Array<{place:number, status:string}> {
    let arr = [...this.places];
    let filterArr = arr.filter(place=> place.status == "free");
    return filterArr;
}

getBusySit():Array<{place:number, status:string}> {
    let arr = [...this.places];
    let filterArr = arr.filter(place=> place.status == "busy");
    return filterArr;
}

orderSit(n:number):void {
    let arr = [...this.places];
    this.numPlace=[];
    let num:number=0;
   for(let i=0; i<arr.length; i++) {
       if(num<n) {
      if(arr[i].status=='free') {
          arr[i].status='busy';
          this.hall[i]=false
          num+=1;
          this.numPlace.push(arr[i].place)

      }
    }
   
   }
  
}



}