import { AfterContentInit, Component, ContentChild, DoCheck, ElementRef, Input, OnInit } from '@angular/core';
import { firstclass } from '../Services-1/firstsr.service';
import { Observable, Observer ,of,from,map} from 'rxjs';

import { error } from 'console';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  providers:[firstclass]
})
export class DemoComponent implements OnInit,DoCheck{

  constructor(private inst:firstclass) { }
 

  users :{name:string,stat:string}[]=[];

  user:string='marwen';


  ngDoCheck(): void {
    this.users=this.inst.users;

  }

  // @ContentChild('para')pg!:ElementRef;
 
  // ngAfterContentInit(): void {
  //   this.pg.nativeElement.innerHTML="hello22jfirfh2";
  //   console.log(this.pg)
  // }

  //-------------observables-------------

  //  myObs= new  Observable((observer)=>{
  //   observer.next('hello')
  //   observer.next('world')
  //   setTimeout(()=>{observer.complete()},2000)
  // })
  //  myObs=  Observable.create((observer:Observer<any>)=>{
  //   observer.next('hello')
  //   observer.next('world')
  //   setTimeout(()=>{observer.complete()},2000)
  // })
  myObs=from([1, 2 ,3]);
  obs=this.myObs.pipe(map((val)=>{return val*5}))
  
  ngOnInit(): void {
    this.obs.subscribe(
      (val:any)=>{
        console.log(val);
      },

    )
  }

}
