import { Injectable,EventEmitter } from "@angular/core";
@Injectable()
export class firstclass{
    users=[
        {
            name:'marwen',
            stat:'student'
        },
        {
            name:'manel',
            stat:'engineer'
        },
    ];
    add(name:string,stat:string):void{
        this.users.push({name:name,stat:stat});

    }
  
}