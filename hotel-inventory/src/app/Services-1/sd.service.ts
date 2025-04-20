import { Injectable,EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class sdService{
   

    ev=new Subject<string>();

    raise(val:string){
        this.ev.next(val);
    }

}